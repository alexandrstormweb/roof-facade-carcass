<?php
$name     =   $_POST['name'];
$mail    =   $_POST['mail'];
$phone   =   $_POST['phone'];
$massage_text  =   $_POST['massage_text'];

$message =
    "<p style='width: 50%;'><strong>Имя:</strong> ".$name."<br></p>".
    "<p style='width: 50%;'><strong>Телефон:</strong> ".$phone."<br></p>".
    "<p style='width: 50%;'><strong>E-mail:</strong> ".$mail."<br></p>".
    "<p style='width: 60%;'><strong>Сообщение:</strong> ".$massage_text."<br></p>";

$subject = "Сообщение с сайта";
$headers = "Content-type: text/html; charset=utf-8\r\n";
$email_to =   'alexandr@stormweb.pro';

if(mail($email_to, $subject, $message, $headers)){
    echo 'sent';
}else{
    echo 'failed';
}
?>