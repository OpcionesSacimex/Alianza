<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadDocument (Request $request){
        $request->file('archivo')->store('public');
        return response()->json([
            'status'=>true,
        ],200);
    }
}
