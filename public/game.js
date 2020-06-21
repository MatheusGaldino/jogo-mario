var song = document.createElement('audio');
	song.src='theme.mp3';

	song.oncanplaythrough  = function(){
		//document.body.appendChild(song)
	}



	//seta resolução do game
	var cvs = document.getElementById('cvs');
    var windowW = window.innerWidth - 40;
    var windowH = window.innerHeight;
    var ctx = cvs.getContext('2d');

    cvs.width = windowW - (windowW * 0.1);
    cvs.height = windowH - (windowH * 0.1);

    var cvsWidth = cvs.width;
    var cvsHeight = cvs.height;

	
    


	



	// ============== view ===============/
    //renderiza o game
    function draw(){
    	
	   	//desenha o fundo - layer 1
		mapRender.drawFundo()
    	//desenha o chão - layer 2
    	mapRender.drawMap();
    	mapRender.moverTela();


    	fisica.friccao();
    	fisica.gravidade();
    	colisao.mapColidir()
    	

    	//desenha o player - layer 3
		player.render()
		player2.render()

    	//movimento
    	player.mover();
    	player.pular();
	
		

    	player.morreu();
    	animacao.player()
		animacao.contar()
		
		multiplayer.requestOnline()

    	//debug
		//console.log('gravidade:' + fisica.gravidadeV + ' player Y:' + player.yPos + ' colisao:' + fisica.colidiuY + ' pulo ativo:' + player.jump + ' força do pulo:' + fisica.jumpForce + ' Velocidade vert:' + player.ySpeed );
		//console.log(' pulo ativo:' + player.numJump);
		//console.log('Player X:' + player.xSpeed );
		//console.time();
		//loop
		//console.log(controle.down)
    	requestAnimationFrame(draw)
    }

    //inicia o game
    draw();

	//=====================================
	document.body.onload = function(){
		//song.play();
	}

	
	

