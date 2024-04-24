<?php

namespace App\Http\Controllers\convenio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SaciConvenio;

class ConvenioController extends Controller
{
    public function allConvenios()
    {
        $datos = SaciConvenio::all();
    
        return response()->json($datos);
    }
}
