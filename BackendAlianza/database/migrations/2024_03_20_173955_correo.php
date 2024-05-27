<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('correo', function (Blueprint $table) {
            $table->increments('id');;
            $table->string("correo",40)->nullable(false);
            $table->string("token",20);
            $table->timestamp("validate")->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('correo');
    }
};
