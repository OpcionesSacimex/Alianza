<?php

namespace App\Http\Controllers\convenio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SaciConvenio;
use Carbon\Carbon;

class ConvenioController extends Controller
{
    public function allConvenios()
    {

        $fecha = date_format(Carbon::now(),'Y-m-d');
        $datos = SaciConvenio::where("fechaTermino",">",$fecha)->get(["id","nombreAlianza","nombreCorto"]);
    
        return response()->json($datos);
    }
    public function existe(Request $request)
    {
        $convenio= SaciConvenio::where('nombreCorto','=',$request->convenio)->first();
        $existe = is_null($convenio);

        return response()->json(['existe'=>$existe!=1]);
    }
    public function getConvenioData(Request $request)
    {
        $fecha = date_format(Carbon::now(),'Y-m-d');
        $datos = SaciConvenio::where('nombreCorto','=',$request->convenio)->where("fechaTermino",">",$fecha)->get(["id","nombreAlianza","nombreCorto","montoMinimo",
        "montoMaximo","plazoMinimo","plazoMaximo","tasa","retenciones","fechaTermino"])->first();
    
        return response()->json($datos);
    }
}
