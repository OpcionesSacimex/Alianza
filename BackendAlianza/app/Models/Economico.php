<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class Economico extends Model
{
    use HasFactory;
    protected $fillable = [
        "ingreso_q",
        "disponible_q",
        "prestamo_f",
        "plazo_f",
        "clabe_int",
    ];
    protected $table="economico";
    protected $primarykey="id";
    public $incrementing= true;
    public $timestamps=false;

    public function cliente(): HasOne{
        return $this->hasOne(Cliente::class);
    }
}
