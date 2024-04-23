<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo_doc extends Model
{
    use HasFactory;
    protected $fillable = [
        "tipo",
    ];
    protected $table="tipo_doc";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;
}
