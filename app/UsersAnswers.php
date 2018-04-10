<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersAnswers extends Model
{
    protected $table = "users_answers";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'question_id', 'answer'
    ];
}
