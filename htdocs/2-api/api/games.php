<?php

require '../database/DatabaseHelper.php';

$config = require '../database/config.php';

$db = new DatabaseHelper($config);



$query = <<<QUERY
    SELECT bgname AS name, rating
    FROM games
    WHERE id = :id
QUERY;

$games = $db->run($query, [":id" => $_GET['id']])->fetch();

header('Content-Type: application/json');

echo json_encode($games);
