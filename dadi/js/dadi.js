document.getElementById("btn").addEventListener("click",

    function(){
        
        const computer = Math.floor(Math.random() * 5) + 1;
        const utente = Math.floor(Math.random() * 5) + 1;

        if(computer > utente){
            vincitore = "Computer"
            document.querySelector("h3").innerHTML = "Ha vinto..."
        }
        else if(utente > computer){
            vincitore = "Utente"
            document.querySelector("h3").innerHTML = "Ha vinto..."
        }
        else if(utente == computer){
            document.querySelector("h3").innerHTML = "Pareggio"
            vincitore = ""
        }

        const risultato = document.getElementById("risultato");
        const punteggio = document.getElementById("punteggio");

        punteggio.innerHTML = ("computer: " + computer + " " + "utente: " + utente);
        risultato.innerHTML = vincitore
    }
);