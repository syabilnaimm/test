<?php
if (isset($_POST['name']))
    $name = $_POST['name'];
else
    $name = "(Not Entered)";

if (isset($_POST['hometown']))
    $hometown = $_POST['hometown'];
else
    $hometown = "(Nowhere)";
?>
<html>

<head>
    <title>Form Test</title>
</head>

<body>
    Your Name is <?php echo $name ?><br>
    Your Are From <?php echo $hometown ?><br><br>
    <form method="post" action="form-handler2.php">
        What is Your name?<br>
        <input type="text" name="name"><br>
        Where Are You From?<br>
        <input type="text" name="hometown"><br>
        <input type="submit">
    </form>
</body>

</html>