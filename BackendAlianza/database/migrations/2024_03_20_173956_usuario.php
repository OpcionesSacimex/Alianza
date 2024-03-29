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
            $table->string("correo",45)->unique();
            $table->string("password",100);
        });
    }
    public function down(): void
    {
        Schema::drop('usuario');
    }
};
