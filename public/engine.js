//definições basicas da engine do game

//fisica do jogo
fisica = {
	moveForce: 1, //força do movimento horizontal
	jumpForce:25, //força do pulo
	friccaoV: 0.8, //desaceleração do movimento horizontal
	gravidadeV: 1.5, //força da gravidade
	colidiuY: false,
	colidiuTopo: false,

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
				if(colisao.topo(x,y)){
					colisao.tileYHit(y)
				}
				break;
			//bloco base transponivel
			case 2:
				if(colisao.topoTransponivel(x,y)){
					colisao.tileYHit(y)
				}
				break;
			//bloco de parede
			case 3:
				if(colisao.topo(x,y)){
					colisao.tileYHit(y)
				}
				if(colisao.left(x,y)){
					colisao.tileLeftHit(y)
				}
				if(colisao.right(x,y)){
					colisao.tileRightHit(y)
				}
				if(colisao.baixo(x,y)){
					colisao.tileYLowHit(y)
				}
				break;
			case 4:
				if(colisao.topoTransponivel(x,y)){
					colisao.tileYHit(y)
				}
				break;
			case 5:
				if(colisao.topoTransponivel(x,y)){
					colisao.tileYHit(y)
				}
				break
			case 6:
				if(colisao.topo(x,y)){
					colisao.tileYHit(y)
				}
				if(colisao.left(x,y)){
					colisao.tileLeftHit(y)
				}
				if(colisao.right(x,y)){
					colisao.tileRightHit(y)
				}
			case 7:
				if(colisao.topo(x,y)){
					colisao.tileYHit(y)
				}
				if(colisao.left(x,y)){
					colisao.tileLeftHit(y)
				}
				if(colisao.right(x,y)){
					colisao.tileRightHit(y)
				}
				break;
		}
	},
}

//colisões do jogo
colisao = {
	//define comportamento das colisões ao atingir as hitboxes
	tileYHit(y){
		fisica.colidiuY = true;
		fisica.colidiuTopo = true;
		player.ySpeed = 0;
		player.jump = false;
		player.yPos = y;
		//Hitbox.drawColision(xCol,yCol); //hitbox debug
	},

	tileLeftHit(x){
		player.xSpeed = 0;
		player.xPos-=2;
		//Hitbox.drawColision(xCol,yCol);
	},
	tileRightHit(x){
		player.xSpeed = 0;
		player.xPos+=2;;
		//Hitbox.drawColision(xCol,yCol);
	},
	

	tileYLowHit(y){
		fisica.colidiuY = true;
		player.ySpeed = 0;
		player.jump = false;
		player.yPos = y;
		//Hitbox.drawColision(xCol,yCol); //hitbox debug
	},

	//colisão com parte superior de um tile
	topo(xCol,yCol){
		if (player.ySpeed > 0.5 && player.yPos >= yCol && player.yPos <= yCol+50 && player.xPos+18 >= xCol-10 && player.xPos+18 <= xCol + 60) {
			//Hitbox.drawColision(xCol,yCol); //hitbox debug
			
			return true
		}
	},

	topoTransponivel(xCol,yCol){
		if (!controle.down) {
			if(player.ySpeed > 0.5 && player.yPos >= yCol && player.yPos <= yCol+8 && player.xPos+18 >= xCol-10 && player.xPos+18 <= xCol + 60){
				return true
			}
		}
	},

	//colisão com as laterais de um tile
	left(xCol,yCol){
		yCol+=50;
		//lado esquerdo
		if ((player.yPos >= yCol || player.yPos+47 >= yCol)  && player.yPos <= yCol+50 && player.xPos >= xCol-38 && player.xPos <= xCol - 28) {
			return true
		//lado direito
		}
	},

	right(xCol,yCol){
		yCol+=50;
		//lado esquerdo
		if((player.yPos >= yCol || player.yPos+ 47 >= yCol)  && player.yPos <= yCol+50 && player.xPos <= xCol+51 && player.xPos >= xCol + 40){
			return true
			//Hitbox.drawColision(xCol,yCol); //hitbox debug
		}
	},

	

	//colisão com a parte inferior de um tile
	baixo(xCol,yCol){
		yCol+=50; //move a hitbox pra baixo do tile
		if (player.ySpeed < 0.3 && player.yPos >= yCol   && player.yPos <= yCol+50 && player.xPos >= xCol-30 && player.xPos <= xCol + 45) {
			fisica.colidiuY = true;
			player.ySpeed = 0;
			player.jump = true;
			player.yPos = yCol+50;
			//Hitbox.drawColision(xCol,yCol); //hitbox debug
		}
		
	},

	tileFase: fase.mapping, //load do arquivo da fase
	mapColidir(){
		//eixo Y                MUDAR AQUI AJUSTE RESOLUÇÃO
		for (let y = 0, yDraw = 0; y < mapRender.tamY; y++, yDraw+= mapRender.size) {
			//eixo X
			for (let i = 0, xDraw = mapRender.xPos; i < mapRender.tamX; i++, xDraw+= mapRender.size) {
				//colisão									
				fisica.colidir(xDraw, yDraw, mapRender.tileFase[y][i]);
			}	
		}
	}
}



Hitbox = {
	
	drawHitbox(){
		//ctx.drawImage(hitbox,  player.xPos, player.yPos);
	},

	drawColision(xDraw, yDraw){
		//ctx.drawImage(hitbox,  xDraw, yDraw);
	},
}



//verifica se a plataforma utilizada é mobile
var isMobile = {
    Android() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var device = isMobile.any()?'mobile':'pc'