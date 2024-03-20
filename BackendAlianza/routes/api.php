<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::post('/new_user', [UsuarioController::class,"store"]);
