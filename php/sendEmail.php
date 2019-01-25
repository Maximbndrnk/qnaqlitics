<?php

    $subject = "New contact from Qnalitics";
    $text = "Name: " . $_POST["name"] . ", contact data: " . $_POST["contact"];
    mail("info@maximbndrnk.fun", $subject, $text);

?>