<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function create (Request $request){
        Cliente::create([
            "usuario_id"=>$request->usuario_id,
            "persona_id"=>$request->persona_id,
            "direccion_id"=>$request->direccion_id,
            "economico_id"=>$request->economico_id
        ]);
        return response()->json([
            'status'=>true,
            //'nombre'=> 'nombre'
        ],200);
    }
}
