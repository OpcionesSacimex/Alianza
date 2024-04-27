<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use setasign\Fpdi\Fpdi;
use setasign\Fpdf\Fpdf;


class UploadController extends Controller
{

    public function uploadDocument(Request $request) {
        // Verificar si se han enviado los archivos
        if ($request->hasFile('ine') && $request->hasFile('fotografía') && $request->hasFile('acta_nac') && $request->hasFile('curp') && $request->hasFile('rfc') && $request->hasFile('comprobante_dom') && $request->hasFile('croquis') && $request->hasFile('comprobante_ing') && $request->hasFile('comprobante_ing2') && $request->hasFile('comprobante_ing3')) {
            try {
                // Validar los archivos
                $request->validate([
                    'ine' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'fotografía' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'acta_nac' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'curp' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'rfc' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_dom' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'croquis' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_ing' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_ing2' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                    'comprobante_ing3' => 'required|mimetypes:application/pdf,image/jpeg,image/png|max:2048',
                ]);

                // Obtener los archivos
                $ine = $request->file('ine');
                $fotografía = $request->file('fotografía');
                $acta_nac = $request->file('acta_nac');
                $curp = $request->file('curp');
                $rfc = $request->file('rfc');
                $comprobante_dom = $request->file('comprobante_dom');
                $croquis = $request->file('croquis');
                $comprobante_ing = $request->file('comprobante_ing');
                $comprobante_ing2 = $request->file(('comprobante_ing2'));
                $comprobante_ing3 = $request->file(('comprobante_ing3'));

                // Generar nombres únicos para los archivos
                $ineNom = uniqid('ine_') . '.' . $ine->getClientOriginalExtension();
                $fotografíaNom = uniqid('fotografía_') . '.' . $fotografía->getClientOriginalExtension();
                $acta_nacNom = uniqid('acta_nac_') . '.' . $acta_nac->getClientOriginalExtension();
                $curpNom = uniqid('curp_').'.'. $curp->getClientOriginalExtension();
                $rfcNom = uniqid('rfc_').'.'. $rfc->getClientOriginalExtension();
                $comprobante_domNom = uniqid('comprobante_dom_') . '.' . $comprobante_dom->getClientOriginalExtension();
                $croquisNom = uniqid('croquis_') . '.' . $croquis->getClientOriginalExtension();
                $comprobante_ingNom = uniqid('comprobante_ing_') . '.' . $comprobante_ing->getClientOriginalExtension();
                $comprobante_ing2Nom = uniqid('comprobante_ing2_').'.'. $comprobante_ing2->getClientOriginalExtension();
                $comprobante_ing3Nom = uniqid('comprobante_ing3_').'.'. $comprobante_ing3->getClientOriginalExtension();
               
                // Mover los archivos a la carpeta storage
                $ine->move(storage_path('app/public'), $ineNom);
                $fotografía->move(storage_path('app/public'), $fotografíaNom);
                $acta_nac->move(storage_path('app/public'), $acta_nacNom);
                $curp->move(storage_path('app/public'),$curpNom);
                $rfc->move(storage_path('app/public'),$rfcNom);
                $comprobante_dom->move(storage_path('app/public'), $comprobante_domNom);
                $croquis->move(storage_path('app/public'), $croquisNom);
                $comprobante_ing->move(storage_path('app/public'), $comprobante_ingNom);
                $comprobante_ing2->move(storage_path('app/public'),$comprobante_ing2Nom);
                $comprobante_ing3->move(storage_path('app/public'),$comprobante_ing3Nom);
                
                $mergedPdfName = uniqid('merged_pdf_') . '.pdf';
                $this->mergePDFs([$comprobante_ingNom, $comprobante_ing2Nom, $comprobante_ing3Nom], $mergedPdfName);

                
                return response()->json(['status' => true, 'message' => 'Archivos subidos correctamente', 'merged_pdf' => $mergedPdfName], 200);
            } catch (\Exception $error) {
                return response()->json(['error' => 'Error al subir los archivos: ' . $error->getMessage()], 400);
            }
        } else {
            // Identificar qué archivos faltan
            $missingFiles = [];
            if (!$request->hasFile('ine')) {
                $missingFiles[] = 'INE';
            }
            if (!$request->hasFile('fotografía')) {
                $missingFiles[] = 'CROQUIS';
            }
            if (!$request->hasFile('acta_nac')) {
                $missingFiles[] = 'ACTA DE NACIMIENTO';
            }
            if (!$request->hasFile('curp')) {
                $missingFiles[] = 'CURP';
            }
            if (!$request->hasFile('rfc')) {
                $missingFiles[] = 'RFC';
            }
            if (!$request->hasFile('comprobante_dom')) {
                $missingFiles[] = 'COMPROBANTE_Domicilio';
            }
            if (!$request->hasFile('croquis')) {
                $missingFiles[] = 'CROQUIS';
            }
            if (!$request->hasFile('comprobante_ing')) {
                $missingFiles[] = 'COMPROBANTE_INGRESOS';
            }
            if (!$request->hasFile('comprobante_ing2')) {
                $missingFiles[] = 'COMPROBANTE_INGRESOS';
            }
            if (!$request->hasFile('comprobante_ing3')) {
                $missingFiles[] = 'COMPROBANTE_INGRESOS';
            }
            $errorMessage = 'Faltan los siguientes archivos: ' . implode(', ', $missingFiles);

            return response()->json(['error' => $errorMessage], 400);
        }
    } 
    private function mergePDF(array $pdfFiles, string $outputFileName)
    {
    // Create instance of Fpdi
        $pdf = new Fpdi();

        // Merge PDFs
        foreach ($pdfFiles as $file) {
            $pdf->setSourceFile(storage_path('app/public/' . $file));
            $tplIdx = $pdf->importPage(1, '/MediaBox');
            $pdf->addPage();
            $pdf->useTemplate($tplIdx);
        }

        // Output merged PDF to storage
        $pdf->Output('F', storage_path('app/public/' . $outputFileName));
    }   
    public function mergePDFs() {
 
        $files = ['file-1.pdf', 'file-2.pdf'];
        $pdf = new Fpdi();
 
        foreach ($files as $file) {
            // set the source file and get the number of pages in the document
            $pageCount =  $pdf->setSourceFile($file);
 
            for ($i=0; $i < $pageCount; $i++) { 
                //create a page
                $pdf->AddPage();
                //import a page then get the id and will be used in the template
                $tplId = $pdf->importPage($i+1);
                //use the template of the imporated page
                $pdf->useTemplate($tplId);
            }
        }
 
        //return the generated PDF
        return $pdf->Output();      
    }
}
