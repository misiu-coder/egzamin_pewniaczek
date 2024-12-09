function liczNeon(){
    var R = document.getElementById('r').value;
    var G = document.getElementById('g').value;
    var B = document.getElementById('b').value;
    var rozmiar = document.getElementById('rozmiar').value;
    var tresc1 = document.getElementById('tresc').value;
    var wynik1 = document.getElementById('wynik');

    wynik1.style.color = `rgb(${R}, ${G}, ${B})`;
    wynik1.style.fontSize = `${rozmiar}px`;
    wynik1 = tresc1;
    document.getElementById('wynik').innerHTML = wynik1;
}