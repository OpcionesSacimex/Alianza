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
        Schema::create('persona', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",45);
            $table->string("ape_pat",45);
            $table->string("apr_mat",45);
            $table->string("telefono",10);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        schema::drop("persona");
    }
};
