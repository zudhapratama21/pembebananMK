<?php 
include '../../includes/func.inc.php';
include '../koneksi.php';


     if(function_exists($_GET['function'])) {
        $_GET['function']();
     }

    function getDosen(){
        global $connect;

        $sql = "SELECT * FROM PEGAWAI";
    
        $hasil = query_getAll($connect,$sql);

        oci_fetch_all($hasil, $rows, 0, 0, OCI_FETCHSTATEMENT_BY_ROW);
        
        foreach ($rows as $hasil) {
            $item[] = $hasil;
        }

        $json = array (
            'result' => 'success',
            'data' => $item
        );

    echo json_encode($json);
    }

    function getDosenById()
    {        
      global $connect;

      if (!empty($_GET["nomor"])) {
         $id = $_GET["nomor"];      
      }  

      $sql = "SELECT * FROM PEGAWAI WHERE NOMOR=:v1";

      $data = array(
        ':v1' => $id
      );
    
      $hasil = query_view($connect,$sql,$data);

      oci_fetch_all($hasil, $rows, 0, 0, OCI_FETCHSTATEMENT_BY_ROW);
        
      foreach ($rows as $hasil) {
          $item[] = $hasil;
      }

      $json = array (
          'result' => 'success',
          'data' => $item
      );

      echo json_encode($json);
    }





?>


