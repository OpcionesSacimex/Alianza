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
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId("cliente_id")->nullable(true)->references('id')->on('cliente');
            $table->foreignId("status_docs_id")->nullable(false)->references('id')->on('status_docs');
            $table->foreignId('tipo_doc_id')->nullable(false)->references('id')->on('tipo_doc');
            $table->string("observaciones",100);
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        schema::drop("documentos");
    }
};
