let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for(let i = 0; i < alpha.length; i++){
    document.querySelector(".alpha").innerHTML += `
<div class="ke"><h5 onclick="sendAlpha()" class="key">${alpha[i]}</h5></div>`}