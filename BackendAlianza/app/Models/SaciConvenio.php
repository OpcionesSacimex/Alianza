<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaciConvenio extends Model
{
    use HasFactory;
    protected $connection = "mysql_second";

    protected $fillable = [
        "nombreAlianza",
        "nombreCorto",
        "montoMinimo",
        "montoMaximo",
        "plazoMinimo",
        "tasa",
        "retenciones",
        "fechaTermino"
    ];
    protected $table="convenios";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;
    
}
