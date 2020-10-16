<?php

$a[] = "Angular";
$a[] = "API";
$a[] = "Backend";
$a[] = "CSS3";
$a[] = "DevOps";
$a[] = "express.js";
$a[] = "Editor";
$a[] = "Frontend";
$a[] = "HTML5";
$a[] = "Java";
$a[] = "JavaScript";
$a[] = "jQuery";
$a[] = "mongoDB";
$a[] = "node.js";
$a[] = "OOP";
$a[] = "php";
$a[] = "Python";
$a[] = "React";
$a[] = "Server";
$a[] = "Shell";
$a[] = "SQL";
$a[] = "Vue";

$q = $_REQUEST["q"];

$hint = "";

if ($q !== "") {
    $q = strtolower($q);
    $length = strlen($q);

    foreach ($a as $tag) {
        if (stristr($q, substr($tag, 0, $length))) {
            if ($hint === "") {
                $hint = $tag;
            } else {
                $hint .= ", $tag";
            }
        }
    }
}

echo $hint === "" ? "" : $hint;

?>