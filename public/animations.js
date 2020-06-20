animacao = {
    frame: 0,
    last: 'right',
    player(){
        if (!controle.jump && controle.right && animacao.frame >= 5) {
            player.image = runR;
            animacao.last = 'right'
        }else if (!controle.jump && controle.left && animacao.frame >= 5){
            player.image = run1;
            animacao.last = 'left'
        }else if (controle.jump && animacao.last == 'right') {
            player.image = run2R
        }else if(controle.jump){
            player.image = run2
        }else if(animacao.last == 'right'){
            player.image = iddleR
        }else {
            player.image = iddle;
        }
    },

    contar(){
        animacao.frame++
        if (animacao.frame == 10) {
            animacao.frame = 0
        }
    }
}