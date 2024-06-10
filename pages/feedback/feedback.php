<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $secondName = $_POST['secondName'];
    $firstName = $_POST['firstName'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $data = "Фамилия: $secondName, Имя: $firstName, Отчество: $surname, Почта: $email, Телефон: $phone\n";

    $file = fopen("feedback_data.txt", "a");

    fwrite($file, $data);

    fclose($file);
}
?>
