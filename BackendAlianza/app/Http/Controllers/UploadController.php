<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;

class UploadController extends Controller
{

    public function uploadDocument(Request $request) {
        // Verificar si se han enviado los archivos
        if ($request->hasFile('ine') && $request->hasFile('croquis') && $request->hasFile('foto') && $request->hasFile('comprobante_dom') && $request->hasFile('comprobante_ing')) {
            try {
                // Validar los archivos
                $request->validate([
                    'ine' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'croquis' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'foto' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_dom' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_ing' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                ]);

                // Obtener los archivos
                $ine = $request->file('ine');
                $croquis = $request->file('croquis');
                $foto = $request->file('foto');
                $comprobante_dom = $request->file(('comprobante_dom'));
                $comprobante_ing = $request->file(('comprobante_ing'));

                // Generar nombres únicos para los archivos
                $ineNom = uniqid('ine_') . '.' . $ine->getClientOriginalExtension();
                $croquisNom = uniqid('croquis_') . '.' . $croquis->getClientOriginalExtension();
                $fotoNom = uniqid('foto_') . '.' . $foto->getClientOriginalExtension();
                $comprobante_domNom = uniqid('comprobante_domicilio_').'.'. $comprobante_dom->getClientOriginalExtension();
                $comprobante_ingNom = uniqid('comprobante_ingresos_').'.'. $comprobante_ing->getClientOriginalExtension();

                // Mover los archivos a la carpeta storage
                $ine->move(storage_path('app/public'), $ineNom);
                $croquis->move(storage_path('app/public'), $croquisNom);
                $foto->move(storage_path('app/public'), $fotoNom);
                $comprobante_dom->move(storage_path('app/public'),$comprobante_domNom);
                $comprobante_ing->move(storage_path('app/public'),$comprobante_ingNom);

                return response()->json(['status' => true, 'message' => 'Archivos subidos correctamente'], 200);
            } catch (\Exception $error) {
                return response()->json(['error' => 'Error al subir los archivos: ' . $error->getMessage()], 400);
            }
        } else {
            // Identificar qué archivos faltan
            $missingFiles = [];
            if (!$request->hasFile('ine')) {
                $missingFiles[] = 'INE';
            }
            if (!$request->hasFile('croquis')) {
                $missingFiles[] = 'CROQUIS';
            }
            if (!$request->hasFile('foto')) {
                $missingFiles[] = 'Foto';
            }
            if (!$request->hasFile('comprobante_dom')) {
                $missingFiles[] = 'COMPROBANTE_DOMICILIO';
            }
            if (!$request->hasFile('comprobante_ing')) {
                $missingFiles[] = 'COMPROBANTE_INGRESOS';
            }
            $errorMessage = 'Faltan los siguientes archivos: ' . implode(', ', $missingFiles);

            return response()->json(['error' => $errorMessage], 400);
        }
    }    
}
