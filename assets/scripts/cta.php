<?php
/*
Version: 1.0
Author: www.simplweb.ch
Website: http://www.simplweb.ch
Contact: info@simplweb.ch

Variable 
	$dzName : Contact Person Name
	$dzEmail : Contact Person Email
	$dzMessage : Contact Person Message
	$dzRes : response holder
	$dzOtherField : Form other aditional fields
	
	
	$dzMailSubject : Mail Subject.
	$dzMailMessage : Mail Body
	$dzMailHeader : Mail Header
	$dzEmailReceiver : Contact receiver email address
	$dzEmailFrom : Mail Form title
	$dzEmailHeader : Mail headers
*/

$dzEmailTo = "info@imperiacars.ch";   // Receiver Email Address "reciever@gmail.com" 

function pr($value)
{
  echo "<pre>";
  print_r($value);
  echo "</pre>";
}

#### Contact Form Script ####
if (isset($_POST['submit']) && $_POST['dzToDo'] == 'Contact') {
  $firstname = trim(strip_tags($_POST['first-name'])); // vorname
  $surname = trim(strip_tags($_POST['surname']));
  $street = trim(strip_tags($_POST['street']));
  $city = trim(strip_tags($_POST['city']));
  $phone = trim(strip_tags($_POST['phone']));
  $dzEmail = trim(strip_tags($_POST['email']));
  $dzReservation = strip_tags($_POST['reservation']);
  $dzCar = strip_tags($_POST['car']);
  $dzTime = strip_tags($_POST['time']);
  $dzMessage = strip_tags($_POST['message']);

  $dzRes = "";
  if (!filter_var($dzEmail, FILTER_VALIDATE_EMAIL)) {
    $dzRes['status'] = 0;
    $dzRes['msg'] = 'Email Angabe ist falsch.';
    echo json_encode($dzRes);
    exit;
  }
  $dzMailSubject = 'Jetzt mieten: Anfrage www.imperiacars.ch';
  $dzMailMessage  =   "
						Diese Person möchte etwas reservieren/mieten:<br/>
					  Vorname: $firstname<br/>
            Nachname: $surname<br/>
            Strasse: $street<br/>
            Ort: $city<br/>
						Email: $dzEmail<br/>
            Tel: $phone<br/>
            Auto: $dzCar<br/>
            Bemerkung: $dzMessage<br/>
						Reservationsdatum & Uhrzeit: $dzReservation<br/>
            Reservationsdauer: $dzTime Stunden<br/>
						";
  $dzEmailHeader    = "MIME-Version: 1.0\r\n";
  $dzEmailHeader     .= "Content-type: text/html; charset=UTF-8\r\n";
  $dzEmailHeader     .= "From: <$dzEmail>";
  if (mail($dzEmailTo, $dzMailSubject, $dzMailMessage, $dzEmailHeader)) {
    header("Location: https://www.imperiacars.ch/success.php");
  } else {
    header("Location: https://www.imperiacars.ch/error.php");
  }
  echo json_encode($dzRes);
  exit;
}
#### Contact Form Script End ####
