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

    public function updateUser(Request $request) {
        $userData = [
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "apr_mat"=>$request->apr_mat,
            "telefono"=>$request->telefono
        ];

        Persona::updateOrCreate(
            ['id' => 6], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );

        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
