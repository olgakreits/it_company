<?php
    $email = $_POST["email"];

    if($email==''){ 
        echo "Введите адрес электронной почты";
    }
    else{
        $to = "test@yandex.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с обратной связи"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@yandex.ru>\r\n";/*ОТ КОГО*/

        $message = "Почта: ".$email."\n";
        $send = mail($to, $subject, $message, $headers);

        if ($send == "true")
        {
            echo " Мы ответим вам в ближайшее время.\r\n";
        }
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>