<?php
namespace Online;
class Multiplayer{
    public $xPos;
    public $yPos;
    public $image;
    public $id;
    

    public function __construct($x, $y, $img, $id){
        $this->xPos = $x;
        $this->yPos = $y;
        $this->image = $img;
        $this->id = $id;
        
    }

    //utiliza os dados enviado pelo player para atualizar o objeto com os dados antigos do servidor
    public function updateDados($obj){
        if ($obj != null && $obj != 'erro') {
            if($this->id == "p1"){
                $player = $obj->player1;
            }else {
                $player = $obj->player2;
            }
            $player->xPos = $this->xPos;
            $player->yPos = $this->yPos;
            $player->image = 'antonio';
        }
    }
}
?>