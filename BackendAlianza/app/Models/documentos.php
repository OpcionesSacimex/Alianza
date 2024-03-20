<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class documentos extends Model
{
    use HasFactory;
    protected $fillable = [
        "credencial",
        "croquis",
        "foto",
        "comp_dom",
        "status",
        "observaciones",
        "comprobante_peso",
        "comprobante_total",
        "ine",
        "autorizacion"
    ];
    protected $table="documentos";
    protected $primarykey="id_documentos";
    public $incrementing= true;
    public $timestamps=false;
}
