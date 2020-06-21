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
	btnLeft.ontouchstart = function (ev) {
		controle.left = true
		ev.preventDefault()
	}
	btnLeft.ontouchend = function (ev) {
		controle.left = false
		ev.preventDefault()
	}


	btnRight.ontouchstart = function (ev) {
		controle.right = true
		ev.preventDefault()
	}
	btnRight.ontouchend = function (ev) {
		controle.right = false
		ev.preventDefault()
	}


	btnUp.ontouchstart = function (ev) {
		controle.jump = true
		ev.preventDefault()
	}
	btnUp.ontouchend = function (ev) {
		controle.jump = false
		ev.preventDefault()
	}
	btnJump.ontouchstart = function (ev) {
		controle.jump = true
		ev.preventDefault()
	}
	btnJump.ontouchend = function (ev) {
		controle.jump = false
		ev.preventDefault()
	}


	btnDown.ontouchstart = function (ev) {
		controle.down = true
		ev.preventDefault()
	}
	btnDown.ontouchend = function (ev) {
		controle.down = false
		ev.preventDefault()
	}
}
