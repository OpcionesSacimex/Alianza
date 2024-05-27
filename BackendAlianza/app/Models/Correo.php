<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Correo extends Model
{
    use HasFactory;

    protected $fillable = [
        "correo",
        "token",
        "validate"
    ];
    protected $hidden = [
        'token',
        'validate',
    ];

    protected $table="correo";
    protected $primaryKey = "id";
    public $incrementing = false;
    public $timestamps = true;
}
