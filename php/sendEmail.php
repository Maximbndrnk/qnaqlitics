<?php

    $subject = "New contact from Qnalitics";
    $text = "Name: " . $_POST["name"] . ", contact data: " . $_POST["contact"];
    mail("korsikov@rbcgrp.com", $subject, $text);

?>