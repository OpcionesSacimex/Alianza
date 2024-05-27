<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string('password',80);
            $table->boolean('activo')->default(1);
            $table->unsignedInteger('correo_id');
            $table->unsignedInteger('telefono_id');
            $table->foreign("correo_id")->nullable(false)->references('id')->on('correo');
            $table->foreign("telefono_id")->nullable(false)->references('id')->on('telefono');
            $table->foreignId("rol_id")->nullable(false)->references('id')->on('rol');
            $table->string("convenio",25);
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::drop('usuario');
    }
};
