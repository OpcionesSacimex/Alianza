<?php

namespace App\Http\Controllers\cliente;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tipo_doc;

class DocumentoController extends Controller
{
    public function allTipo()
    {
        $datos = tipo_doc::all();
    
        return $datos;
    }
}
