<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;
    protected $fillable = [
        "rol",
    ];
    protected $table="rol";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;
}
