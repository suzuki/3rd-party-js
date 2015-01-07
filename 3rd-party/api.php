<?php

$logfile = '/usr/local/var/log/nginx/3rd-party-api.log';
$log = new \SplFileObject($logfile, 'w+');

$log->fwrite(var_export($_SERVER, true));
$log->fwrite("\n");
$log->fwrite(var_export($_POST, true));
$log->fwrite("\n");
$log->fwrite(var_export($_COOKIE, true));
$log->fwrite("\n");

header('Content-type: application/javascript; charset=utf-8');
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Origin: http://2nd-party.local:8080');
//header('Access-Control-Allow-Credentials: true');
echo json_encode(
    [
        'status' => 'ok'
    ]
);
