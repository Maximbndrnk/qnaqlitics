<?php

    $subject = "New contact from Qnalytics";
    $text = "Name: " . $_POST["name"] . ", contact data: " . $_POST["contact"];
    mail("ste.janke@gmail.com", $subject, $text);

?>