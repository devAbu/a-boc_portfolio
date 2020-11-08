<?php

$email = "info@a-boc.com";
$userName = $_REQUEST["userName"];
$userEmail = $_REQUEST["userEmail"];
$userPhone = $_REQUEST["userPhone"];
$userMessage = $_REQUEST["userMessage"];


if ($_REQUEST['task'] == "message") {

    $admin_email = "contact@a-boc.com";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $email;

    $message = 'E-mail je poslao: ' . $userName . ' <br> Email adresa: ' . $userEmail . ' <br> Broj mob: ' . $userPhone . ' <br> Poruka: ' . $userMessage;

    $htmlMessage = html_entity_decode($message);

    //send email

    if (mail($admin_email, "$userEmail", $htmlMessage, $headers)) {
        echo ('sent');
    } else {
        echo ('ne radi');
    }
}
