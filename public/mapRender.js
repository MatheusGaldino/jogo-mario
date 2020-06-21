//================= Renderiza o mapa do game =============
mapRender = {
	tamX: fase.largura, //largura do mapa em tiles
	tamY: fase.altura, //altura do mapa em tiles
	size: 50, //tamanho do tile
	movendo: false, //status de movimento do mapRendera
	
	xPos:0, //posição X para render do tile
	yPos:0, //posição Y para render do tile

	xFixo: fase.largura * 50, //largura do mapa em pixels
	yFixo: fase.altura * 50,  //altura do mapa em pixels


	fundoRender: 0,
	xFundo: 0,
	tileFase: fase.mapping, //load do arquivo da fase
	

	//função que adiciona movimento a tela de acordo com o movimento do jogador (paralax)
	moverTela(){
		//faz o render do mapa acompanhar o movimento do player para trás
		if (player.xPos < 200  && controle.left && mapRender.xPos < 0) {
			mapRender.xPos -= player.xSpeed
			mapRender.movendo = true;
			
		//faz o render do mapa acompanhar o movimento do player para frente
		}else if(player.xPos > cvs.width-250 && controle.right  && mapRender.xPos > mapRender.xFixo *-1){
			mapRender.xPos -= player.xSpeed
			mapRender.movendo = true;
			
		//trava a tela quando player está no meio
		}else{
			mapRender.movendo = false;
		}
	},


	//função que renderiza o mapa
	drawMap(){
		//eixo Y               MUDAR AQUI AJUSTE RESOLUÇÃO
		for (let y = 0, yDraw = 0; y < mapRender.tamY; y++, yDraw+= mapRender.size) {
			//eixo X
			for (let i = 0, xDraw = mapRender.xPos; i < mapRender.tamX; i++, xDraw+= mapRender.size) {
    			if(mapRender.tileFase[y][i] != 0){
					
					ctx.drawImage(tileImage[mapRender.tileFase[y][i]], xDraw, yDraw);
    			}
			}	
		}
	},


	//função que renderiza o fundo e cria o efeito paralax
	drawFundo(){
		//proporciona a largura da imagem de acordo com o tamanho do canvas
		mapRender.xFundo = cvsHeight * 1.7633
		
		//checa se o player esta se movendo para renderizar o movimento
		if (controle.right&&player.xSpeed > 2) {
			mapRender.fundoRender--
		}else if(controle.left&&player.xSpeed < -2){
			mapRender.fundoRender++
		}

		//renderiza as três layers do fundo de acordo com o movimento do player
		for (let x = 0; x + mapRender.xFundo < mapRender.xFixo; x+=mapRender.xFundo){
			ctx.drawImage(layer3, x + (mapRender.fundoRender/4)-20,0, mapRender.xFundo, cvsHeight);
			ctx.drawImage(layer2, x + (mapRender.fundoRender/3)-20,0, mapRender.xFundo, cvsHeight);
			ctx.drawImage(layer1, x + (mapRender.fundoRender/1.15)-20,0, mapRender.xFundo, cvsHeight);
		}
	}
}