<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $recipient = "votre@email.com"; // Remplacez par l'adresse e-mail réelle du destinataire

    $subject = "Nouvelle demande de contact de $name";

    $body = "Nom et Prénom: $name\n";
    $body .= "Société: $company\n";
    $body .= "Email: $email\n";
    $body .= "Téléphone: $phone\n";
    $body .= "Demande concerne: $subject\n";
    $body .= "Message:\n$message";

    $headers = "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: $email\r\n";

    mail($recipient, $subject, $body, $headers);

    header("Location: thank-you.html"); // Redirection après envoi du formulaire
} else {
    header("Location: index.html");
}
?>
