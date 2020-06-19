// ======================================= FUNÇÃO CONSTRUTORA ==========================================
//javascript usa Programação Baseada em Protótipos, uma gabiarra forte pra criar objetos fora do padrão JSON
//cria uma "classe" de objeto através de uma função construtora
function Testando(n){
    //atributos da classe Testes
    this.nome = n
    
    //comandos soltos dentro da classe tem comportamento de construtor
    console.log(Testando.nome)

    //declaração autista de um método numa 'classe' de obj construtor
    Testando.prototype.verNome = function (){
        console.log(`${this.nome} aaaaaaa me mata`)
    }
}

//instancias da classe testando
var pessoa2 = new Testando('claudio')
pessoa2.verNome()



// ======================================= CLASSE DE GENTE ==========================================
//jeito normal de instanciar uma classe dentro do javascript, seguindo os padroes da POO
class Batatinha {
    //atributos (não pode usar modificador de visibilidade)
    recheio
    molho

    //construtor da clase
    constructor(r,m) {
        this.recheio = r
        this.molho = m
    }

    //declaração de métodos da classe
    mostrarBatata(){
        console.log(`Essa é uma batatinha recheada com ${this.recheio} e coberta com ${this.molho}`)
    }
}

var comida = new Batatinha('bacon', 'maionese')
comida.mostrarBatata()



//========================================== JSON ========================================================
//cria um objeto já iniciado e usa JSON pra definir atributos e métodos (jeito simples e rápido)
var Testes = {
    nome: '',
    testes: function(n){
        this.nome = n
    },

    verNome: function(){
        console.log(this.nome)
    }
}

var pessoa =  Testes.testes('pedro')
Testes.verNome()


