<?php
echo "<pre>";
var_dump($_POST);
echo "</pre>";

// val data
$acceptname = false;
$acceptemail = false;
$acceptbericht = false;

if (isset($_POST['name']) && strlen($_POST['name']) >= 4) {
    $naam = $_POST['name'];
    $acceptname = true;
} else {
    $acceptname = false;
}

if (isset($_POST['email'])) {
    $mail = $_POST['email'];
}
if (isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $bericht = $_POST['email'];
    $acceptemail = true;
} else {
    $acceptemail = false;
}

if (isset($_POST['bericht']) && strlen($_POST['bericht']) >= 15) {
    $bericht = $_POST['bericht'];
    $acceptbericht = true;
} else {
    $acceptbericht = false;
}

// Send data
if($acceptname) {
    echo $naam;
    echo "<br />";
}
if($acceptemail) {
    echo $mail;
    echo "<br />";
}
if($acceptbericht) {
    echo $bericht;
    echo "<br />";
}

if($acceptname && $acceptemail && $acceptbericht) {
    // Send mail

    // check if mail is send
} else {
    // Error retry
    echo "Error";
}
