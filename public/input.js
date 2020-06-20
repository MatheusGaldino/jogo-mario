var btnUp  = document.getElementById('btnUp')
var btnRight = document.getElementById('btnRight')
var btnLeft = document.getElementById('btnLeft')
var btnDown = document.getElementById('btnDown')
var btnJump = document.getElementById('btnJump')
var btnFire = document.getElementById('btnFire')
var controlArrow = document.getElementById('controls')
var controlBtns = document.getElementById('controlsS')

//recebe e filtra os controles do game (inputs)
controle = {
	right:false,
	left:false,
	jump:false,
	down:false,

	


	//event listener para as teclas do jogo (usando teclado)
	listen(event){
		if (device == 'pc') {
			
			var key = event.key;
			if (event.type == 'keydown') {
				keystate = true;
			}else{
				keystate = false;
			}

			switch(key){
			//eixo x
			case 'ArrowLeft':
				controle.left = keystate;
				break; 
			case 'a':
				controle.left = keystate;
				break; 
			case 'ArrowRight':
				controle.right = keystate;
				break;
			case 'd':
				controle.right = keystate;
				break;

			//eixo y
			case ' ': 
				controle.jump = keystate;
				break;
			case 'w': 
				controle.jump = keystate;
				break; 
			case 'ArrowUp': 
				controle.jump = keystate;
				break; 
			
			//baixo
			case 'ArrowDown': 
				controle.down = keystate;
				break; 
			case 's': 
				controle.down = keystate;
				break; 
			}
		}
	},
}

//event listener para os comandos do teclado
window.addEventListener('keydown', controle.listen);
window.addEventListener('keyup', controle.listen);

				

//listener dos controles mobile
controlArrow.style.display = 'block'
controlBtns.style.display = 'block'
mobileControls()
function mobileControls() {
	btnLeft.ontouchstart = function () {
		controle.left = true
	}
	btnLeft.ontouchend = function () {
		controle.left = false
	}


	btnRight.ontouchstart = function () {
		controle.right = true
	}
	btnRight.ontouchend = function () {
		controle.right = false
	}


	btnUp.ontouchstart = function () {
		controle.jump = true
	}
	btnUp.ontouchend = function () {
		controle.jump = false
	}
	btnJump.ontouchstart = function () {
		controle.jump = true
	}
	btnJump.ontouchend = function () {
		controle.jump = false
	}


	btnDown.onclick = function () {
		controle.down = keystate
	}
}
