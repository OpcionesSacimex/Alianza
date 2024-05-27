<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Telefono extends Model
{
    use HasFactory;

    protected $fillable = [
        "numero",
        "token",
        "validate"
    ];
    protected $hidden = [
        'token',
        'validate',
    ];

    protected $table="telefono";
    protected $primaryKey = "id";
    public $incrementing = false;
    public $timestamps = true;
}
