<strong>
<?
$send = $_POST['button'];
$header = $_POST['subject'];
$name = $_POST['name'];
$mail = $_POST['Email'];
$text = $_POST['message'];
if ($send != "button"){
 
$to = "ravskiy32@gmail.com";                 // вставте свой емаил
$subject = "Письмо с сайта gentlemendev.com";        // вставте Темy сообщения
$mailheaders .="Reply-To: $mailnn";
 
$msg .= "Имя отправителя:ntt$namen";
$msg .= "E-mail отправителя:ntt$mailn";
$msg .= "Сообщение: n$textnnn";
 
 
mail ($to, $subject, $msg, $mailheaders);
 
    $mess= "Уважаемый $name, ваше сообщение было успешно отправленно.
"; 
 
 echo "<center><p class="text">$mess</p>
";
    
}
?>
</strong>
