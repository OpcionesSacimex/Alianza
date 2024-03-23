<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Economico;

class EconomicoController extends Controller
{
    public function create (Request $request){
        Economico::create([
            "ingresos_q"=>$request->ingresos_q,
            "disponible_q"=>$request->disponible_q,
            "prestamo_f"=>$request->prestamo_f,
            "plazo_f"=>$request->plazo_f,
            "clabe_int"=>$request->clabe_int
        ]);
        return response()->json([
            'status'=>true,
            'nombre'=> 'nombre'
        ],200);
    }
}
