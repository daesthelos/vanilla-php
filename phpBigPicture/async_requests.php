<?php
require __DIR__ . '/vendor/autoload.php';

$global_start = microtime(true);

$client = new GuzzleHttp\Client();

$promises = [
  '1' => $client->getAsync('https://pokeapi.co/api/v2/pokemon/ditto'),
  '2' => $client->getAsync('https://pokeapi.co/api/v2/pokemon/caterpie'),
  '3' => $client->getAsync('https://pokeapi.co/api/v2/pokemon/pidgey'),
];

$results = GuzzleHttp\Promise\unwrap($promises);
$results = GuzzleHttp\Promise\settle($promises)->wait();

echo $results['1']['value']->getBody() . '<br>';
echo $results['2']['value']->getBody() . '<br>';
echo $results['3']['value']->getBody() . '<br>';

$global_end = microtime(true);

echo "Full page loaded in " . round($global_end - $global_start,2) . " seconds";
?>