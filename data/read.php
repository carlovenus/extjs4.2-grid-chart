<?php

    $minRand = 1;
    $maxRand = 9999;
    $rowsNum = 20;

    $response = array(
        "data" => array(),
        "totalResults" => $rowsNum,
        "success" => "true"
    );

    for ($x = 1; $x <= $rowsNum; $x++) {
        $row = array(
            "endpoint" => "api." . ($x) . ".com",
            "node1" => mt_rand($minRand, $maxRand),
            "node2" => mt_rand($minRand, $maxRand),
            "node3" => mt_rand($minRand, $maxRand),
            "time"  => date("G:i:s")
        );
        array_push($response["data"], $row);
    }

    echo json_encode($response);

?>