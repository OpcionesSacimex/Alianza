<?php

namespace App\Http\Controllers;

use App\Models\Economico;
use Illuminate\Http\Request;
use App\Models\Persona;

class PersonaController extends Controller
{
    public function updateUser(Request $request) {
        $id = $request->user()->id;
        $userData = [
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "apr_mat"=>$request->apr_mat,
            "telefono"=>$request->telefono
        ];
        Persona::updateOrCreate(
            ['id' => $id], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );
        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
