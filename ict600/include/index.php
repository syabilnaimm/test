<?php
require_once 'dbconn.php';

$sql = "SELECT u.id as user_id, u.username, u.password, r.role_name FROM users u, roles r WHERE u.role_id = r.id";
$result = mysqli_query($conn, $sql) or die(mysql_error());

$sql2 = "SELECT sub_name from subscriptions";
$result2 = mysqli_query($conn, $sql2) or die(mysql_error());

?>

<table border="1" cellpadding="5" cellspacing="2">
    <tr>
        <th>User ID</th>
        <th>Username</th>
        <th>Password</th>
        <th>Role Name</th>
    </tr>
    <?php if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td><?php echo $row["user_id"]; ?></td>
                <td><?php echo $row["username"]; ?></td>
                <td><?php echo $row["password"]; ?></td>
                <td><?php echo $row["role_name"]; ?></td>
            </tr>
    <?php }
    } else {
        echo "<tr><td colspan='4'" . "0 results" . "></td></tr>";
    } ?>
</table>
<br>
<ol>
    <?php
    if (mysqli_num_rows($result2) > 0) {
        while ($row = mysqli_fetch_assoc($result2)) {
            echo "<li> Subscription Name " . ":" . $row["sub_name"] . "</li>";
        }
    } ?>
</ol>