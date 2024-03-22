<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::post('/usuario/createUser',[UsuarioController::class,'create']);
Route::middleware('auth:api')->get('/user',[UsuarioController::class,'getUser']);
Route::post('/login',[UsuarioController::class,'login']);