<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class direcciones extends Model
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
    protected $table="direcciones";
    protected $primarykey="id_direcciones";
    public $incrementing= true;
    public $timestamps=false;

    public function direcciones(){
        return $this->hasMany("","","");
    }
}
