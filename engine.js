// ================== engine ============
	//definições basicas da engine do game

	//fisica do jogo
	fisica = {
		moveForce: 1, //força do movimento horizontal
		jumpForce:25, //força do pulo
		friccaoV: 0.8, //desaceleração do movimento horizontal
		gravidadeV: 1.5, //força da gravidade
		colidiuY: false,

		friccao(){
			player.ySpeed *= fisica.friccaoV;
		},

		gravidade(){
			player.ySpeed += fisica.gravidadeV;
		},

		colidir(x, y, tipe){
			y-=50;
			//tipos de bloco para colidir
			switch(tipe){
				//sem bloco
				case 0:
	    			break;
	    		//bloco base
	    		case 1:
		    		colisao.topo(x,y);
			    	break;
			    //bloco de parede
				case 2:
					colisao.topo(x,y);
					colisao.lados(x,y);
					colisao.baixo(x,y);
					break;
				case 3:
					colisao.topo(x,y);
					break;
				case 4:
					colisao.topo(x,y);
					break;
			}
		},
	}

	//colisões do jogo
	colisao = {
		//colisão com parte superior de um tile
		topo(x,y){
			if (player.yPos >=y   && player.yPos <= y+8 && player.xPos+18 >= x-10 && player.xPos+18 <= x + 60) {
				fisica.colidiuY = true;
				player.ySpeed = 0;
				player.jump = false;
				player.yPos = y;
				Hitbox.drawColision(x,y); //hitbox debug
			}
		},

		//colisão com as laterais de um tile
		lados(x,y){
			y+=50;
			//lado esquerdo
			if ((player.yPos >= y || player.yPos+47 >= y)  && player.yPos <= y+50 && player.xPos >= x-38 && player.xPos <= x - 28) {
				player.xSpeed = 0;
				player.xPos-=1;
				Hitbox.drawColision(x,y);
			//lado direito
			}else if((player.yPos >= y || player.yPos+ 47 >= y)  && player.yPos <= y+50 && player.xPos <= x+51 && player.xPos >= x + 40){
				player.xSpeed = 0;
				player.xPos+=1;
				Hitbox.drawColision(x,y); //hitbox debug
			}
		},

		//colisão com a parte inferior de um tile
		baixo(x,y){
			y+=50; //move a hitbox pra baixo do tile
			if (player.yPos >= y   && player.yPos <= y+50 && player.xPos >= x-30 && player.xPos <= x + 45) {
				fisica.colidiuY = true;
				player.ySpeed = 0;
				player.jump = true;
				player.yPos = y+50;
				Hitbox.drawColision(x,y); //hitbox debug
			}
			
		},

		tileFase: fase.mapping, //load do arquivo da fase
		definirColisao(){
			//eixo Y
			for (let y = 0, yDraw = 0; y < mapRender.tamY; y++, yDraw+= mapRender.size) {
				//eixo X
				for (let i = 0, xDraw = mapRender.xPos; i < mapRender.tamX; i++, xDraw+= mapRender.size) {
	    								
					//colisão	VER OQ FAZER									
					fisica.colidir(xDraw, yDraw, mapRender.tileFase[y][i]);
				}	
    		}
    	}

	}


	//para testar as hitboxes do game (debug)
	Hitbox = {
		drawHitbox(){
			ctx.drawImage(hitbox,  player.xPos, player.yPos);
		},

		drawColision(xDraw, yDraw){
			ctx.drawImage(hitbox,  xDraw, yDraw);
		},
	}