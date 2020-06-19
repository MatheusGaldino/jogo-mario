//================= Renderiza o mapRendera do game =============
mapRender = {
	tamX: 63, //largura do mapRendera
	tamY: 13, //altura do mapRendera
	size: 50, //tamanho do tile
	movendo: false, //status de movimento do mapRendera
	
	xPos:0, //posição X para render do tile
	yPos:0, //posição Y para render do tile

	xFixo: 0, //largura do mapRendera em pixels
	yFixo: 0,  //altura do mapRendera em pixels

	tileFase: fase.mapping, //load do arquivo da fase
	

	//função que adiciona movimento a tela de acordo com o movimento do jogador (paralax)
	moverTela(){
		//faz o render do mapRendera acompanhar o movimento do player para trás
		if (player.xPos < 100  && controle.left && mapRender.xPos < 0) {
			mapRender.xPos -= player.xSpeed
			mapRender.movendo = true;
		//faz o render do mapRendera acompanhar o movimento do player para frente
		}else if(player.xPos > cvs.width-200 && controle.right  && mapRender.xPos > mapRender.tamX * mapRender.size *-1){
			mapRender.xPos -= player.xSpeed
			mapRender.movendo = true;
		//trava a tela quando player está no meio
		}else{
			mapRender.movendo = false;
		}
	},

	//função que calcula o tamamanho total do mapRendera
	mapRenderPos(){
		mapRender.xFixo = mapRender.size * mapRender.tamX; 
		mapRender.yFixo = mapRender.size * mapRender.tamY; 
	},

	//função que renderiza o mapRendera
	drawMap(){
		//eixo Y
		for (let y = 0, yDraw = 0; y < mapRender.tamY; y++, yDraw+= mapRender.size) {
			//eixo X
			for (let i = 0, xDraw = mapRender.xPos; i < mapRender.tamX; i++, xDraw+= mapRender.size) {
    			if(mapRender.tileFase[y][i] != 0){
    				ctx.drawImage(tileImage[mapRender.tileFase[y][i]], xDraw, yDraw);
    			}
				
				//colisão	VER OQ FAZER									
				//fisica.colidir(xDraw, yDraw, mapRender.tileFase[y][i]);
			}	
		}
	}
}