   // load das sprites que serão utilizadas
	var iddle = new Image();
	iddle.src = 'img/player/iddle.png';

	var fundo = new Image();
	fundo.src = 'img/sky.png';

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

    //define os tipos de tile existentes, para poder especificar seus tipos de colisão
    var tileImage = [null , tile, tileTest, tileRoundL, tileRoundR];
    //==========================================
   
    


//controla o player
	player = {
		image: iddleR,
		width: iddleR.width,
		height: iddleR.height,
		jump: true,
		xPos: 80,
		yPos: 200,

		oldX:0,
		oldY:0,

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
			if (controle.right) {
		    	player.xSpeed += fisica.moveForce;
	  		}

	  		//move para a esquerda
	  		if (controle.left) {
			    player.xSpeed -= fisica.moveForce;
	  		}

	  		//'trava' o movimento do player quando o mapa esta se movendo
	  		if (mapRender.movendo) {
				player.xPos += 0; 
			}else{
				player.xPos += player.xSpeed;
			}
			
			//adiciona a frição ao movimento, zerando a xSpeed ao soltar o botão
    		player.xSpeed *= fisica.friccaoV; //calculo exponecial q reduz a velocidade
    		if ((player.xSpeed < 0.5 && controle.right) ||(player.xSpeed > -0.8 && controle.left)) {
    			player.xSpeed = 0; //zera a velocidade de mov quando é menor q 0.5 de speed
    		}
		},

		pular(){
			//
	  		if ((controle.jump && player.jump == false)) {
			    player.ySpeed -= fisica.jumpForce;
			    controle.djump +=1;
			    player.jump = true;
			    fisica.colidiuY = false;
	  		}
    		player.yPos += player.ySpeed;
		},

		segPulo(){
			//
	  		if ((controle.jump && player.jump && controle.djump > 0)) {
			    player.ySpeed -= fisica.jumpForce;
			    controle.djump = 0;
			    player.jump = true;
			    fisica.colidiuY = false;
	  		}
		}
	}
