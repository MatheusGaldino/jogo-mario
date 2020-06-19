var song = document.createElement('audio');
	song.src='theme.mp3';

	song.oncanplaythrough  = function(){
		//document.body.appendChild(song)
	}



	//seta resolução do game
	var cvs = document.getElementById('cvs');
    var windowW = window.innerWidth - 20;
    var windowH = window.innerHeight;
    var ctx = cvs.getContext('2d');

    cvs.width = windowW - (windowW * 0.1);
    cvs.height = windowH - (windowH * 0.1);

    var cvsWidth = cvs.width;
    var cvsHeight = cvs.height;


    


	



	// ============== view ===============/
    //renderiza o game
    function draw(){
    	player.oldX = player.xPos; 
		player.olxY = player.yPos;
	   	//desenha o fundo - layer 1
    	ctx.drawImage(fundo, 0,0, cvsWidth, cvsHeight);

    	//desenha o chão - layer 2
    	mapRender.drawMap();
    	mapRender.moverTela();


    	fisica.friccao();
    	fisica.gravidade();
    	colisao.definirColisao()
    	

    	//desenha o player - layer 3
    	ctx.drawImage(player.image, player.xPos, player.yPos);




    	
    	
    	
	   	
    	

    	//movimento
    	player.mover();
    	player.pular();
    	//	controle.segPulo();
    	

    	player.morreu();
    	
    	//debug
		//console.log('gravidade:' + fisica.gravidadeV + ' player Y:' + player.yPos + ' colisao:' + fisica.colidiuY + ' pulo ativo:' + player.jump + ' força do pulo:' + fisica.jumpForce + ' Velocidade vert:' + player.ySpeed );
		//console.log(' pulo ativo:' + player.jump);
		//console.log('Player X:' + player.xSpeed );
		//console.time();
    	//loop
    	requestAnimationFrame(draw)
    }

    //inicia o game
    draw();

	//=====================================
	document.body.onload = function(){
		//song.play();
	}

	
	

