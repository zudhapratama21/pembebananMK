<?php 
    include "../includes/func.inc.php";

    $db_user = "PA0010";
    $db_pass = "742309";

    $connect = konekDb($db_user, $db_pass);

    if (!$connect) {
        die("Koneksi Tidak Berhasil: ");
    }
