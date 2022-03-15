<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<?php
/*****************
example code akses table oracle
contoh table BARANG dengan kolom sbb :
NOMOR NUMBER(10)
NAMA_BARANG VARCHAR2(100)
STOK NUMBER(2)
//*****************/

include "includes/func.inc.php";

$db_user = "PA0010";
$db_pass = "742309";
$con = konekDb($db_user, $db_pass);

echo "<strong>VIEW DATA BARANG</strong><br><br>";

$nomor = 111;
$sql = "SELECT * FROM PEGAWAI WHERE NOMOR=:v1";

$data = array(
    ':v1' => $nomor
);

$hasil = query_view($con, $sql,$data);
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

?>
</body>
</html>
 