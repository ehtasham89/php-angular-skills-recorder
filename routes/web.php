<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () {
    return redirect('app');
});

$router->options(
    '/{any:.*}', 
    [
        'middleware' => ['cors'], 
        function (){ 
            return response(['status' => 'success']); 
        }
    ]
);

$router->group(['middleware' => 'cors', 'prefix' => 'api'], function () use ($router) {
    $router->get('questions', 'QuestionsController@listAll');
    $router->post('store-user-answers', 'QuestionsController@storeUserAnswers');
});