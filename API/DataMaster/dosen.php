<?php 
include '../koneksi.php';
include '../../includes/func.inc.php';

    if (function_exists($_GET['function'])) {
        $_GET['function']();
    }  

function index (){
    global $connect;

    $nomor = 111;
    $sql = "SELECT * FROM PEGAWAI WHERE nomor=:v1" ;
    $data = array(
        ':v1' => $nomor
    );
    $hasil = query_view($connect,$sql,$data);

    oci_fetch_all($hasil, $rows, 0, 0, OCI_FETCHSTATEMENT_BY_ROW);

    foreach ($rows as $hasil) {
        $item[] = array(
            'NAMA' => $hasil['NAMA'],
            'NIP' => $hasil['NIP']
        );
    }

    $json = array (
        'result' => 'success',
        'data' => $item
    );

    echo $json['data'];

}



?>


