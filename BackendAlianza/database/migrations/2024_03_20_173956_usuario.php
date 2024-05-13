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
            $table->timestamp('verify_at')->nullable();
            $table->string("password",100);
            $table->foreignId("rol_id")->nullable(false)->references('id')->on('rol');
            $table->string("convenio",25);
            $table->rememberToken();
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::drop('usuario');
    }
};
