<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class Direccion extends Model
{
    use HasFactory;
    protected $fillable = [
        "calle",
        "no_exterior",
        "no_interior",
        "cp",
        "colonia",
        "latitud", 
        "longitud"
    ];
    protected $table="direccion";
    protected $primarykey="id";
    public $incrementing= true;
    public $timestamps=false;

    public function cliente(): HasOne{
        return $this->hasOne(Cliente::class);
    }
}
