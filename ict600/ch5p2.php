<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $gender = '';
    if (isset($_POST["submit"])) {
        if (isset($_POST["gender"]))
            $gender = $_POST["gender"];

        if (isset($_POST["interest"])) {
            $interest = $_POST["interest"];
        } else
            $interest = array();

        if (isset($_POST["state"])) {
            $state = $_POST["state"];
        } else
            $state = '';
    }
    ?>
    <form method="post" action="<?php echo
                                $_SERVER['PHP_SELF'] ?>">
        <label for="gender">Gender: </label>
        <input type="radio" id="gender" name="gender" value="M" <?php if ($gender == 'M') echo 'checked' ?>> Male
        <input type="radio" id="gender" name="gender" value="F" <?php if ($gender == 'F') echo 'checked' ?>> Female
        <br />
        <label for="interest">Interest: </label>

        Sport <input type="checkbox" id="interest" name="interest[]" value="Sport" <?php if (in_array("Sport", $interest)) echo 'checked' ?>>
        Entertainment <input type="checkbox" id="interest" name="interest[]" value=" Entertainment " <?php if (in_array(" Entertainment ", $interest)) echo 'checked="checked"' ?>>
        Education <input type="checkbox" id="interest" name="interest[]" value=" Education " <?php if (in_array(" Education ", $interest)) echo 'checked="checked"' ?>>
        Politic <input type="checkbox" id="interest" name="interest[]" value=" Politic " <?php if (in_array(" Politic ", $interest)) echo 'checked="checked"' ?>>
        <br><br>
        <label for="interest">State: </label>
        <select name="state">
            <option value="Perlis" <?php if ($state == 'Perlis') echo 'selected' ?>> Perlis</option>
            <option value="Kedah" <?php if ($state == 'Kedah') echo 'selected' ?>> Kedah</option>
            <option value="Pulau Pinang" <?php if ($state == 'Pulau Pinang') echo 'selected' ?>> Pulau Pinang</option>
            <option value="Perak" <?php if ($state == 'Perak') echo 'selected' ?>> Perak</option>
            <option value="Selangor" <?php if ($state == 'Selangor') echo 'selected' ?>> Selangor</option>
            <option value="Wilayah Perseketuan" <?php if ($state == 'Wilayah Perseketuan') echo 'selected' ?>> Wilayah Perseketuan</option>
        </select>
        <br><br>
        <input type="submit" name="submit">
    </form>
    <?php
    echo 'Gender =' . $gender;
    echo "<br>";

    //get the number if selected option
    $countInterest = count($interest);
    echo "You are interested in " . $countInterest . "fields.<br>";
    echo "Your interested field(s) is/are ";
    for ($i = 0; $i < $countInterest; $i++) {
        echo $interest[$i] . " , ";
    }
    echo '<br> You are in ' . $state;
    ?>
</body>

</html>