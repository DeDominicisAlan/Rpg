const vidaJugador = document.getElementById("vidaJugador");
const vidaEnemigo = document.getElementById("vidaEnemigo");
const quiengana = document.getElementById("quiengana");
const siguiente = document.getElementById("siguiente");

const ataque = document.getElementById("ataque");
const habilidad = document.getElementById("habilidad");


//Clases
class npc{

    constructor(vida,ataque,defensa){
    this.vidaMax = vida;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.nivel = 1;
    }
    
     setVida(vida){
        this.vida = vida;
    }
    
    setVidaMax(vidaMax){
        this.vidaMax = vidaMax;
    }
    
     setDefensa(defensa){
        this.defensa = defensa;
    }
    
     setAtaque(ataque){
        this.ataque = ataque;
    }
    
    setNivel(nivel){
        this.nivel = nivel;
    }
    
    getVida(){
        return this.vida;
    }
    
    getVidaMax(){
        return this.vidaMax;
    }
    
    getDefensa(){
        return this.defensa;
    }
    
    getAtaque(){
        return this.ataque;
    }
    
    atacar(enemigo){
        enemigo.setVida( enemigo.getVida() - (this.ataque - enemigo.getDefensa() ) )
    }
    
    daño(enemigo){
        return (this.ataque - enemigo.getDefensa())
    }
    
    habilidad(){
        this.vida += this.vidaMax * 0.10
    }
    
    subirNivel(){
        this.nivel += 1;
        this.vidaMax += 40;
        this.vida = this.vidaMax;
        this.ataque += 15;
        this.defensa += 10;
    }
    
}

//Inicializacion de objetos

var bestia = new npc(100,40,10);

var jugador =  new npc(200,40,15);

//Actualizo los campos

document.addEventListener("DOMContentLoaded", () => {
    actualizar()
})

//Eventos

ataque.addEventListener("click", () =>{
    if(jugador.getVida() > 0 && bestia.getVida() > 0){
    jugador.atacar(bestia);
    turnoEnemigo();
    }
    if(bestia.getVida() <= 0){
    siguiente.innerHTML = "Siguiente";
    siguiente.style.display = "block";
    }
})

habilidad.addEventListener("click", () => {
    if(jugador.getVida() > 0 && bestia.getVida() > 0){
        jugador.habilidad();
        turnoEnemigo();
    }
})

//Siguiente: Para cuando vencemos en la batalla

siguiente.addEventListener("click", () => {
    siguiente.style.display = "none";
    bestia.subirNivel();
    jugador.subirNivel();
    actualizar();
    quiengana.innerHTML = "";
})

function actualizar(){
    vidaJugador.innerHTML = jugador.vida;
    
    vidaEnemigo.innerHTML = bestia.vida;
    
    if(bestia.getVida() <= 0)
        quiengana.innerHTML = "Victoria para el Jugador"
    else if (jugador.getVida <= 0) quiengana.innerHTML = "Derrota"
        
}

function turnoEnemigo(){
    bestia.atacar(jugador)
    actualizar();
}