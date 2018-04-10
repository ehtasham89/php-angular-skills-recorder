<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    protected $table = "questions";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title'
    ];

    public function user() {
        return new \App\User;
    }

    public function answers() {
        return new \App\UsersAnswers;
    }
}
