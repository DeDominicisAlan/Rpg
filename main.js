const vidaJugador = document.getElementById("vidaJugador");
const vidaEnemigo = document.getElementById("vidaEnemigo");
const quiengana = document.getElementById("quiengana");
const siguiente = document.getElementById("siguiente");

const ataque = document.getElementById("ataque");
const habilidad = document.getElementById("habilidad");

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
    
    getDefensa(){
        return this.defensa;
    }
    
    getAtaque(){
        return this.ataque;
    }
    
    atacar(enemigo){
        enemigo.setVida( enemigo.getVida() - (this.ataque - enemigo.getDefensa() ) )
    }
    
    habilidad(){
        this.vida += 50
        if(this.vida > this.vidaMax)
            this.vida = this.vidaMax;
    }
    
    subirNivel(){
        this.nivel += 1;
        this.vidaMax += 40;
        this.vida = this.vidaMax;
        this.ataque += 15;
        this.defensa += 10;
    }
    
}

var bestia = new npc(100,25,10);

var jugador =  new npc(200,40,15);

document.addEventListener("DOMContentLoaded", () => {
    actualizar()
})

ataque.addEventListener("click", () =>{
    if(jugador.getVida() > 0 && bestia.getVida() > 0){
    jugador.atacar(bestia);
    turnoEnemigo();
    actualizar();
    }
    if(bestia.getVida() <= 0){
    siguiente.innerHTML = "Siguiente";
    siguiente.style.display = "block";
    }
})

siguiente.addEventListener("click", () => {
    siguiente.style.display = "none";
    bestia.subirNivel();
    jugador.subirNivel();
    actualizar();
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
}