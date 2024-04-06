<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persona;

class PersonaController extends Controller
{
    public function create (Request $request){
        Persona::create([
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "apr_mat"=>$request->apr_mat,
            "telefono"=>$request->telefono
        ]);

        return response()->json([
            'status'=>true,
            'nombre'=> 'nombre'
        ],200);
    }

   /*  public function updateC (Request $request){
        Persona::update([
            "nombre"=>$request->input('nombre'),
            "ape_pat"=>$request->input('ape_pat'),
            "apr_mat"=>$request->input('ape_mat'),
            "telefono"=>$request->input('telefono')
        ]);

        return response()->json([
            'status'=>true,
            'nombre'=> 'nombre'
        ],200);
    } */
}
