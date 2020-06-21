// load das sprites que serão utilizadas
var iddle = new Image();
iddle.src = 'img/player/iddle.png';

//var fundo = new Image();
//fundo.src = 'img/sky.png';

var hitbox = new Image();
hitbox.src = 'img/colision.png';

var tileTest = new Image();
tileTest.src = 'img/hitbox.png';

var tile = new Image();
tile.src = 'img/tile/tile.png';

var tileRoundR = new Image();
tileRoundR.src = 'img/tile/tile-RoundR.png';

var tileRoundL = new Image();
tileRoundL.src = 'img/tile/tile-RoundL.png';

var tile = new Image();
tile.src = 'img/tile/tile.png';

var run1 = new Image();
run1.src = 'img//player/run-1.png';

var run2 = new Image();
run2.src = 'img//player/run-2.png';

var run3 = new Image();
run3.src = 'img//player/run-3.png';

var crouch = new Image();
crouch.src = 'img/player/crouch.png';

var iddleR = new Image();
iddleR.src = 'img/player/iddle_right.png';

var runR = new Image();
runR.src = 'img/player/runR.gif';

var run2R = new Image();
run2R.src = 'img/player/run-2_right.png';

var run3R = new Image();
run3R.src = 'img/player/run-3_right.png';

var crouchR = new Image();
crouchR.src = 'img/player/crouch_right.png';

var layer1 = new Image();
layer1.src = 'img/fase_1/layer_1.png';

var layer2 = new Image();
layer2.src = 'img/fase_1/layer_2.png';

var layer3 = new Image();
layer3.src = 'img/fase_1/layer_3.png';



//define os tipos de tile existentes, para poder especificar seus tipos de colisão
var tileImage = [null , tile, tile, tileTest, tileRoundL, tileRoundR, tileRoundR, tileRoundL];
//==========================================

    


//controla o player
player = {
	image: iddleR,
	imageSpr: 'iddleR',
	width: iddleR.width,
	height: iddleR.height,
	andando: false,
	jump: true,
	numJump: 0,
	xPos: 80,
	yPos: 200,
	xFull: 80,
	yFull: 200,
	morto: false,

	xSpeed:0,
	ySpeed: 0,


	//melhorar
	morreu(){
		if (player.xPos + 40 < 0 || player.xPos - 50 > cvs.width || player.yPos > cvs.height || player.yPos < 0) {
			alert ('morreu');
		}
	},

	mover(){
		//move para a direita
		player.andando = false
		if (controle.right) {
			player.andando = true
			player.xSpeed += fisica.moveForce;
			
		}

		//move para a esquerda
		if (controle.left) {
			if(player.xPos >= 15){
				player.andando = true
				player.xSpeed -= fisica.moveForce;
			}
		}
		
		//'trava' o movimento do player quando o mapa esta se movendo
		if (mapRender.movendo) {
			player.xPos += 0; 
		}else{
			player.xPos += player.xSpeed;
		}
		player.xFull += player.xSpeed;
		if (controle.right) {
			//player.xFull -= player.xPos
		} else {
			//player.xFull += player.xPos
		}
		
		
		//adiciona a frição ao movimento, zerando a xSpeed ao soltar o botão
		player.xSpeed *= fisica.friccaoV; //calculo exponecial q reduz a velocidade
		if ((player.xSpeed < 0.5 && controle.right) ||(player.xSpeed > -0.8 && controle.left)) {
			player.xSpeed = 0; //zera a velocidade de mov quando é menor q 0.5 de speed
		}
		

	},

	pular(){
		//executa um pulo simples
		if (player.numJump <= 1 && controle.jump && player.jump == false) {
			player.ySpeed -= fisica.jumpForce;
			controle.djump +=1;
			player.jump = true;
			fisica.colidiuY = false;
			fisica.colidiuTopo = false;
			player.numJump++;
		}else if(!controle.jump && player.jump == true){
			player.jump = false;
		}

		if(fisica.colidiuTopo){
			player.numJump = 0
		}

		player.yPos += player.ySpeed;
		player.yFull = player.yPos;
	},

	

	abaixar(){
		//desce um bloco desativando a colisão
		if ((controle.jump && player.jump && controle.djump > 0)) {
			player.ySpeed -= fisica.jumpForce;
			controle.djump = 0;
			player.jump = true;
			fisica.colidiuY = false;
		}
	},

	render(){
		ctx.drawImage(player.image, player.xPos, player.yPos);
	}

}


player2 = {
    id:'p2',
    image:iddleR,
    xPos: 80,
	yPos: 200,
	xFull: 80,
	yFull: 200,

	render(){
		ctx.drawImage(player2.image, player2.xFull, player2.yFull);
	}
}