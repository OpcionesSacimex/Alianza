<?php

namespace App\Http\Controllers\cliente;

use App\Http\Controllers\Controller;
use App\Models\Status_docs;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function allStatus()
    {
        $datos = Status_docs::all();
    
        return $datos;
    }
}
