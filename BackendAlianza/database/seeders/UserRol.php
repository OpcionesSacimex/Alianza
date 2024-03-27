<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRol extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rol')->insert(array(
            'rol' => 'cliente'
        ));
        DB::table('rol')->insert(array(
            'rol' => 'asesor'
        ));
        DB::table('rol')->insert(array(
            'rol' => 'admin'
        ));
    }
}
