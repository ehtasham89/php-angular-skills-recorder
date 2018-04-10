<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use App\Questions;

class QuestionsController extends Controller
{
    private $model;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Questions $questions)
    {
        $this->model = $questions;
    }

    public function listAll() {
        try {
            $data = $this->model->all();
            
            return response($data, 200);
        } catch (\Exception $e) {
            return response(['message' => $e->getMessage()], 500);
        }
    }

    public function storeUserAnswers(\Illuminate\Http\Request $req) {
        try {
            $res = $req->only('user', 'questions');
            $msg = "User answers saved successfully.";

            if (isset($res['user']['email'])) {
                if ($this->model->user()->where('email', $res['user']['email'])->count()) {
                    return ['message' => 'User with email ('.$res['user']['email']. ') already recorded the answers.'];
                } 
                
                if (!isset($res['questions'])) {
                    return ['message' => "Answers should't be empty"];
                }

                $userId = $this->model->user()->insertGetId($res['user']);

                foreach ($res['questions'] as $key => $val) {
                    $qestion = explode("_", $key);

                    $data = [
                        'user_id' => $userId,
                        'question_id' => $qestion[1],
                        'answer' => $val
                    ];

                    $this->model->answers()->insert($data);
                }

                $getUserAns = $this->model->answers()
                                ->select('q.title', 'users_answers.answer', 'user_id', 'question_id')
                                ->where('user_id', $userId)
                                ->join('questions as q', 'q.id', '=', 'users_answers.question_id')
                                ->get()->toArray();

                foreach ($getUserAns as $key => $ans) {
                    $getUserAns[$key]['closest'] = \DB::select("
                        SELECT u.name, u.email, ans.answer
                        FROM
                        ( ( SELECT user_id, question_id, answer, ".$ans['answer']."-answer AS diff
                            FROM users_answers
                            WHERE question_id = ".$ans['question_id']."
                            AND user_id <> ".$ans['user_id']."
                            AND answer < ".$ans['answer']."
                            ORDER BY answer DESC
                            LIMIT 3
                        ) 
                        UNION ALL
                        ( SELECT user_id, question_id, answer, answer-".$ans['answer']." AS diff
                            FROM users_answers
                            WHERE question_id = ".$ans['question_id']."
                            AND user_id <> ".$ans['user_id']."
                            AND answer >= ".$ans['answer']."
                            ORDER BY answer ASC
                            LIMIT 3
                        ) 
                        ) AS ans 
                        JOIN user as u on u.id = ans.user_id
                        JOIN questions as q on q.id = ans.question_id
                        order by diff limit 3
                    ");
                }

                //\Log::info('Ans Sheet: '. json_encode($getUserAns));
                return ['data' => $getUserAns, 'message' => 'success'];
            } else {
                return ['message' => "User email is required."];
            }

            return response(['message' => $msg], 200);
        } catch (\Exception $e) {
            return response(['message' => $e->getMessage()], 200);
        }
    }
}
