<?php

namespace App\Http\Controllers;

use App\Jobs\SendNewsletterJob;
use App\Models\User;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    //
    public static function sendMail() {
        // $users = User::all();
        $users = User::where('active', true)->get();
        // dd($users);
        foreach ($users as $user) {
            # code...
            dispatch(new SendNewsletterJob($user));
        }
        echo 'done';
    }
}
