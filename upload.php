<?php
$filename = $_FILES['file']['name'];

// file location
$location = "upload/".$filename;

if(move_uploaded_file($_FILES ['file']['tmp_name'], $location)){
    echo $location;
}else {
    echo 0;
}

?>
