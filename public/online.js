
/*
* SUBSTITUIR ISSO PRA UMA CONEXÃO COM WEBSOCKET
*/  

  multiplayer = {
      id: 'default',

      loadId(){
        var url_string = window.location.href
        var url = new URL(url_string);
        multiplayer.id = url.searchParams.get("id");
       
      },

      requestOnline() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //verifica se a resposta recebeida já foi processada pelo server
                if(this.responseText != "oi"){
                    document.querySelector('span').innerHTML = this.responseText + "<br><br><br>";
                    var myObj = JSON.parse(this.responseText);
                    if(multiplayer.id == 'p1'){
                        obj2 = myObj.player2
                    }else{
                        obj2 = myObj.player1
                    }
                    player2.xFull = obj2.xPos
                    player2.yFull = obj2.yPos
                    //player2.image = myObj.imageSrc
                }
            }
            console.log(this.responseText)
        }
        xhttp.open("GET", `./server/multiplayer.php?x=${player.xFull}&y=${player.yFull}&id=${multiplayer.id}`, true);
        xhttp.send();
    },
  }

  multiplayer.loadId()
  

