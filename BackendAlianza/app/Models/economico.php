<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class economico extends Model
{
    use HasFactory;
    protected $fillable = [
        "ingresos_q",
        "disponible_q",
        "prestamo_f",
        "plazo_f",
        "clabe_int",
    ];
    protected $table="economico";
    protected $primarykey="id_economico";
    public $incrementing= true;
    public $timestamps=false;
}
