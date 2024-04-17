<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Economico;

class EconomicoController extends Controller
{
    public function create (Request $request){
        $id = $request->user()->id;
        $userData = [
            "ingresos_q"=>$request->ingresos_q,
            "disponible_q"=>$request->disponible_q,
            "prestamo_f"=>$request->prestamo_f,
            "plazo_f"=>$request->plazo_f,
            "clabe_int"=>$request->clabe_int
        ];
        Economico::updateOrCreate(
            ['id' => $id], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );

        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
