<?php 
include '../koneksi.php';
include '../../includes/func.inc.php';

    if (function_exists($_GET['function'])) {
        $_GET['function']();
    }  

function index (){
    global $connect;

    $sql = "SELECT * FROM PEGAWAI";
    $hasil = query_view($connect,$sql);

    oci_fetch_all($hasil, $rows, 0, 0, OCI_FETCHSTATEMENT_BY_ROW);

    $response = array(
                     'status' => 1,
                     'message' =>'Success',
                     'data' => $rows
                  );
    echo json_encode($response);

}


