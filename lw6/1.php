<!DOCTYPE html>
<html>
<head>
    <title>Високосный год</title>
</head>
<body>
    <form method="post">
        Введите год: <input type="text" name="year">
        <button type="submit">Проверить</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $year = $_POST['year'];
        if ($year % 4 == 0) {
            echo "YES";
        } else {
            echo "NO";
        }
    }
    ?>
</body>
</html>