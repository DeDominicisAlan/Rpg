const vidaJugador = document.getElementById("vidaJugador");
const vidaEnemigo = document.getElementById("vidaEnemigo");

const ataque = document.getElementById("ataque");
const habilidad = document.getElementById("habilidad");

class npc{

    constructor(vida,ataque,defensa){
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    }
    
     setVida(vida){
        this.vida = vida;
    }
    
     setDefensa(defensa){
        this.defensa = defensa;
    }
    
     setAtaque(ataque){
        this.ataque = ataque;
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
        console.log(enemigo.getDefensa() - this.ataque)
    }
    
    habilidad(){
        this.vida += 50
    }
    
}

var bestia = new npc(100,25,10);

var jugador =  new npc(200,40,15);

document.addEventListener("DOMContentLoaded", () => {
    actualizar()
})

ataque.addEventListener("click", () =>{
    jugador.atacar(bestia);
    turnoEnemigo();
    actualizar();
})

function actualizar(){
    vidaJugador.innerHTML = jugador.vida;
    
    vidaEnemigo.innerHTML = bestia.vida;
    
    if(bestia.getVida() <= 0){
        vidaEnemigo.innerHTML = "MUERTO"
        vidaJugador.innerHTML = "VICTORIA"
    }
        
}

function turnoEnemigo(){
    bestia.atacar(jugador)
}