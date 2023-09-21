<?php
session_start();

if (!isset($_SESSION['tasks'])) {
    $_SESSION['tasks'] = [];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add'])) {
        $taskText = $_POST['task'];
        if (!empty($taskText)) {
            array_push($_SESSION['tasks'], $taskText);
        }
    } elseif (isset($_POST['delete'])) {
        $index = $_POST['index'];
        if (isset($_SESSION['tasks'][$index])) {
            unset($_SESSION['tasks'][$index]);
        }
    }
}

if (isset($_GET['reset'])) {
    $_SESSION['tasks'] = [];
}

header('Location: index.html');
?>
