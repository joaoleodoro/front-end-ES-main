var idade = parseInt(prompt("Qual a sua idade?"));

if (idade >= 18) {
    alert("Você é maior de idade!");
}
else if (idade < 18) {
    window.location.href = "menor.html";
} else {
    alert("Erro. Digite novamente");
    window.location.href = "index.html";
}