<?php
namespace Online;
class ManipulaArquivo{
    public $playerReq;
    public $path;
    public function __construct($id){
        if ($id == 'p1') {
            $this->path = 'data1.js';
        } else {
            $this->path = 'data2.js';
        }
    }

    //abre e lê arquivo JSON com os dados dos players
    public function lerJson($op){
        $jsonFile = fopen($this->path, 'r');
        if (filesize($this->path)>0) {
            $data = fread($jsonFile, filesize($this->path));
        }else{
            $data = '';
        }
        if($jsonObj = json_decode($data)){
            fclose($jsonFile);
            return $jsonObj;
        }else{
            fclose($jsonFile);
            return 'erro';
        }
    }

    //recebe o objeto com os dados dos players, converte pra JSON e atualiza o arquivo 
    public function attJson($data){
        if ($data != null && $data != 'erro') {
            $jsonFile = fopen($this->path, 'w');
            $result = fwrite($jsonFile, json_encode($data));
            fclose($jsonFile);
            return $result;
        }
    }

    //muda o arquivo que será lido para responder o request do player
    public function changePath($id){
        if ($id == 'p1') {
            $this->path = 'data2.js';
        } else {
            $this->path = 'data1.js';
        }
    }
}
?>