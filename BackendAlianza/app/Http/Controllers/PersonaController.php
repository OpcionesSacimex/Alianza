<?php

namespace App\Http\Controllers;

use App\Models\Economico;
use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Cliente;

class PersonaController extends Controller
{
    public function updateUser(Request $request) {
        $id = $request->user()->id;
        $userData = [
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "ape_mat"=>$request->ape_mat
        ];
        $persona=Persona::updateOrCreate(
            ['id' => $id], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );
        Cliente::where("usuario_id","=",$id)->update([
            "persona_id"=>$persona->id
        ]);

        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
