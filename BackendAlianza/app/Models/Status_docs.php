<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status_docs extends Model
{
    use HasFactory;
    protected $fillable = [
        "status",
    ];
    protected $table="status_docs";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;
}
