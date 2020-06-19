//recebe e filtra os controles do game (inputs)
	controle = {
		right:false,
		left:false,
		jump:false,
		djump: 0,
		last:null,

		//event listener para as teclas do jogo
		listen(event){
			var key = event.keyCode;
		    
		    if (event.type == 'keydown') {
		        keystate = true;
		    }else{
		    	keystate = false;
		    }

	        switch(key){
	        //eixo x
	        case 37:
	            controle.left = keystate;
	            if (event.type == 'keyup') {
	            	controle.last = 'left';
				}
	            break; 
	        case 39:
	        	if (event.type == 'keyup') {
	            	controle.last = 'right';
				}
	            controle.right = keystate;
	            break; 

	        //eixo y
	        case 32: 
	            controle.jump = keystate;
	            break; 
	        case 38: 
	            controle.jump = keystate;
	            break; 
	        }
		},
	}

	//event listener para os comandos do teclado
	window.addEventListener('keydown', controle.listen);
	window.addEventListener('keyup', controle.listen);