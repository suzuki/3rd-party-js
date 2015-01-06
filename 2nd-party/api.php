<?php

$logfile = '/usr/local/var/log/nginx/2nd-party-api.log';
$log = new \SplFileObject($logfile, 'w+');

$log->fwrite(var_export($_SERVER, true));
$log->fwrite("\n");
$log->fwrite(var_export($_POST, true));
$log->fwrite("\n");

header('Content-type: application/javascript; charset=utf-8');
//header('Access-Control-Allow-Origin: *');
echo json_encode(
    [
        'status' => 'ok'
    ]
);
