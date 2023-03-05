document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem('kirjautunut') === 'kyllä'){
        document.getElementById('tervetulo_teksti').textContent += " " + localStorage.getItem("nimi");
        document.getElementById("nimi").style.display = 'none';
        document.getElementById("kirjaudu_nappi").style.display = 'none';
        document.getElementById("kirjaudu_ulos_nappi").style.display = 'inline-block';
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}

function kirjauduUlos(){
    localStorage.removeItem("nimi");
    localStorage.setItem("kirjautunut", 'ei');
}