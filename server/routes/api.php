<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/user', [
    UserController::class, "index"
])->name("/user/getAll");

Route::get('/user/{user_id}', [
    UserController::class, "getUser"
])->name("/user/getId");

Route::post('/user', [
    UserController::class, "store"
])->name("/user/store");