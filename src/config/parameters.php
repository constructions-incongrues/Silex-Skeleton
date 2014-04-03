<?php

use Symfony\Component\Yaml\Yaml;

// Load configuration
$app['parameters'] = Yaml::parse(file_get_contents(__DIR__.'/../config/parameters.yml'));
