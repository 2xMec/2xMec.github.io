<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST['user-email'];
    $message = $_POST['message'];
    $toEmail = "site-sahibi@domain.com";  
    $headers = "From: " . $userEmail . "\r\n";
    $headers .= "Reply-To: " . $userEmail . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $emailSubject = "Yeni İletişim Mesajı";
    $emailBody = "<h3>Yeni mesaj geldi:</h3>";
    $emailBody .= "<p><strong>Gönderen:</strong> " . $userEmail . "</p>";
    $emailBody .= "<p><strong>Mesaj:</strong></p><p>" . nl2br($message) . "</p>";
    if (mail($toEmail, $emailSubject, $emailBody, $headers)) {
        echo "<script>alert('Mesajınız başarıyla gönderildi!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'); window.location.href = 'index.html';</script>";
    }
}
?>
