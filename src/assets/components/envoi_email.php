<?php
// Vérifier que le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Destinataire de l'e-mail
    $destinataire = "jeneranandresy@gmail.com";
    
    // Récupérer les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Sujet de l'e-mail
    $sujet = "Nouveau message de contact de " . $nom;

    // Corps du message
    $corps_du_message = "Nom: " . $nom . "\n";
    $corps_du_message .= "Email: " . $email . "\n\n";
    $corps_du_message .= "Message:\n" . $message;

    // Entêtes de l'e-mail
    $entetes = "From: " . $email . "\r\n";
    $entetes .= "Reply-To: " . $email . "\r\n";
    $entetes .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoyer l'e-mail
    if (mail($destinataire, $sujet, $corps_du_message, $entetes)) {
        // Redirection après succès
        header("Location: index.html?status=success");
        
        exit();
    } else {
        // Redirection après échec
        header("Location: index.html?status=error");
        exit();
    }
} else {
    // Si la requête n'est pas POST, rediriger
    header("Location: index.html");
    exit();
}
?>