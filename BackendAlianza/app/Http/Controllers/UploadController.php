<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadDocument (Request $request){
       $file = $request->file('archivo');
       $path = public_path().'/storage/';
       $fileName = $file->getClientOriginalName();
       $file->move($path, $fileName);
       return response()->json(['status'=>true,],200);
       /* $request->file('archivo')->store('public');
        return response()->json([
            'status'=>true,
        ],200);*/
    }
}
