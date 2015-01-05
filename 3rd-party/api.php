<?php


$logfile = '/usr/local/var/log/nginx/api.log';
$log = new \SplFileObject($logfile, 'w+');


$log->fwrite(var_export($_SERVER, true));
$log->fwrite("\n");

//var_dump($_SERVER);
