<!DOCTYPE html>
<html>
<head>
    <title>Високосный год</title>
</head>
<body>
    <form method="post">
        Введите число: <input type="text" name="digit">
        <button type="submit">Ввести</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $digit = $_POST['digit'];
        switch($digit){
            case 1:
                echo "Один";
                break;
            case 2:
                echo "Два";
                break;
            case 3:
                echo "Три";
                break;
            case 4:
                echo "Четыре";
                break;
            case 5:
                echo "Пять";
                break;
            case 6:
                echo "Шесть";
                break;
            case 7:
                echo "Семь";
                break;
            case 8:
                echo "Восемь";
                break;
            case 9:
                echo "Девять";
                break;
                
        }
    }
    ?>
</body>
</html>