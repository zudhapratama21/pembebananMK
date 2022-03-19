<?php 
include '../../includes/func.inc.php';
include '../koneksi.php';


     if(function_exists($_GET['function'])) {
        $_GET['function']();
     }

    function getKelas(){
        global $connect;

        $sql = " SELECT * from KELAS WHERE PROGRAM IN (1,2,3,4) AND JURUSAN IN (10,12,4)";
    
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

    function getKelasById()
    {        
      global $connect;

      if (!empty($_GET["nomor"])) {
         $id = $_GET["nomor"];      
      }  

      $sql = "SELECT * from KELAS WHERE NOMOR=:v1 AND PROGRAM IN (1,2,3,4) AND JURUSAN IN (10,12,4)";

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


