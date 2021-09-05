<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        try{
            $users = User::all();
            return response()->json($users);
        }catch(Exception $error){
            return response()->json($error);
        }
    }
    public function getUser($user_id){
        try{
            $user = User::find($user_id);
            return response()->json($user);
        }catch(Exception $error){
            return response()->json($error);
        }
    }
    public function store(Request $request){
        $user = $request->all();
        // After Validation
        try{
            $user = User::create([
                'name' =>  $user['name'],
                'last_name' => $user['last_name'],
                'password' => $user['password'],
                'email' => $user['email']
            ]);

            return response()->json($user);
            
        }catch(Exception $error){
            return response()->json($error);
        }
    }
}
