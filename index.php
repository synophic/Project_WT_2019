<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <?php
    $target = file_get_contents("info/info.json");
    $jsonny = json_decode($target, true);

    echo "<title>" . $jsonny[array_key_first($jsonny)]["topic"] . "</title>";
    echo "</head>";

    echo '<body onload="load(\'' . array_key_first($jsonny) . '\')">';
    echo '<div id="mySidenav" class="sidenav">';
    echo ' <div class="minisidenav">';
    echo '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
    for ($i = 0; $i < count($jsonny); $i++) {
        switch ($i) {
            case 0:
                echo '<h3>อาณาจักรอยุธยา</h3>';
                break;
            case 2:
                echo '<hr><hr><h3>5 ราชวงศ์</h3>';
                break;
            case 7:
                echo '<hr><hr><h3>สมัยอยุธยาตอนต้น</h3>';
                break;
            case 10:
                echo '<hr><hr><h3>เหตุการณ์สำคัญ</h3>';
                break;
            case 19:
                echo '<hr><hr><h3>บุคคลสำคัญ</h3>';
                break;
            case 22:
                echo '<hr><hr><h3>ข้อมูลสมาชิก</h3>';
                break;
        }
        echo '<a href="#" onclick="changePage(\'' . array_keys($jsonny)[$i] . '\')">' . $jsonny[array_keys($jsonny)[$i]]["info"][0]["title"] . '</a>';
    }

    echo '<hr><hr><hr><hr><hr>';
    echo '</div>';
    echo '</div>';
    echo '<span class="sidenavbutt" onclick="openNav()">&#9776; เลือกหน้า</span>';
    echo '<div id="box" onclick="closeNav()"></div>';

    //Bootstrap js
    echo '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"crossorigin="anonymous"></script>';
    echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"crossorigin="anonymous"></script>';
    echo '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"crossorigin="anonymous"></script>';

    echo '<script src="script.js"></script>';
    echo "</body>";

    echo '<footer>';
    echo '<script src="https://apps.elfsight.com/p/platform.js" defer></script>';
    echo '<div class="elfsight-app-3aa555ca-e8f2-4959-91dd-2281e781a385"></div>';
    echo '</footer>';

    ?>

</html>