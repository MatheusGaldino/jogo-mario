<?php
namespace Online;

require_once('resources/ManipulaArquivo.php');
require_once('resources/Multiplayer.php');

//load dos dados do player (tempo real)
$x = $_GET['x'];
$y = $_GET['y'];
$id = $_GET['id'];
$img = 'a';

//arredonda os dados recebidos pra facilitar a manipulação
$x = 0 + round($x);
$y = 0 + round($y);

$mtp = new Multiplayer($x, $y, $img, $id);
$file = new ManipulaArquivo($id);


$player = $file->lerJson('ler');
$mtp->updateDados($player);
$file->attJson($player);




//lê os dados do outro player e responde o request do jogo
$file->changePath($id);
$resposta = $file->lerJson('responder');
if($resposta != null && $resposta != "erro"){
    echo(json_encode($resposta));
}else{
    echo "oi";
}
?>