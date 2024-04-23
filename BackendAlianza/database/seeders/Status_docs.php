<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Status_docs extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status_docs')->insert(array(
            'status' => 'Enviado'
        ));
        DB::table('status_docs')->insert(array(
            'status' => 'En revisión'
        ));
        DB::table('status_docs')->insert(array(
            'status' => 'Rechazado'
        ));
        DB::table('status_docs')->insert(array(
            'status' => 'Aceptado'
        ));
    }
}
