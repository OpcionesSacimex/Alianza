<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadDocument (Request $request){
        /*$validatedData = $request->validate([
            'archivo' => 'mimetypes:application/pdf,application/msword,image/jpeg,image/bmp,image/png|max:2048',
           ]);
        $validatedData = $request->file('archivo');*/
        if($request->hasFile('archivo')){
            try{
                request()->validate([
                    //'archivo' => 'image|mimes:jpeg,png,jpg',]);
                    'archivo' => 'mimetypes:application/pdf,image/jpeg,image/bmp,image/png|max:2048',]);
                    
                    $file = $request->file('archivo');
                    $path = public_path().'/storage/';
                    $fileName = $file->getClientOriginalName();
                    $file->move($path, $fileName);
                    return response()->json(['status'=>true,],200);
            }catch(Exception $error){
                return response()->json(['error'=>'Verificar el tipo de archivo, solo se admiten PDF, JPG, PNG',],200);
            }
    
            
        }
        return response()->json(['status'=>false,],200);
 
    }
}
