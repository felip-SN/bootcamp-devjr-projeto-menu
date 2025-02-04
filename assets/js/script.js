let countPotato = 0;
let countChicken = 0;
let countMeat = 0;

let countFarofa = 0;
let countSalade = 0;
let countTorresmo = 0;

let choose = "";
let choose2 = "";

let nome;
let cellphone;
let email;

let limitIncresent;
let limitDecrement;

document.getElementById("potato").innerHTML = countPotato;
document.getElementById("chicken").innerHTML = countChicken;
document.getElementById("meat").innerHTML = countMeat;

document.getElementById("farofa").innerHTML = countFarofa;
document.getElementById("salade").innerHTML = countSalade;
document.getElementById("torresmo").innerHTML = countTorresmo;

function incresentCount(name)
{
    switch(name){
        case 'potato':
            countPotato = countPotato + 1;
            document.getElementById("potato").innerHTML = countPotato;
            choose = "potato";
        break;
        case 'chicken':
            countChicken = countChicken + 1;
            document.getElementById("chicken").innerHTML = countChicken;
            choose = "chicken";
        break;
        case 'meat':
            countMeat = countMeat + 1;
            document.getElementById("meat").innerHTML = countMeat;
            choose = "meat";
        break;
        case 'farofa':
            countFarofa = countFarofa + 1;
            document.getElementById("farofa").innerHTML = countFarofa;
            choose2 = "farofa";
        break;
        case 'salade':
            countSalade = countSalade + 1;
            document.getElementById("salade").innerHTML = countSalade;
            choose2 = "salade";
        break;
        case 'torresmo':
            countTorresmo = countTorresmo + 1;
            document.getElementById("torresmo").innerHTML = countTorresmo;
            choose2 = "torresmo";
        break;
    }
}

function decrementCount(name)
{
    switch(name){
        case 'potato':
            countPotato = countPotato - 1;
            document.getElementById("potato").innerHTML = countPotato;
            choose = "";
        break;
        case 'chicken':
            countChicken = countChicken - 1;
            document.getElementById("chicken").innerHTML = countChicken;
            choose = "";
        break;
        case 'meat':
            countMeat = countMeat - 1;
            document.getElementById("meat").innerHTML = countMeat;
            choose = "";
        break;
        case 'farofa':
            countFarofa = countFarofa - 1;
            document.getElementById("farofa").innerHTML = countFarofa;
            choose2 = "";
        break;
        case 'salade':
            countSalade = countSalade - 1;
            document.getElementById("salade").innerHTML = countSalade;
            choose2 = "";
        break;
        case 'torresmo':
            countTorresmo = countTorresmo - 1;
            document.getElementById("torresmo").innerHTML = countTorresmo;
            choose2 = "";
        break;
    }
}

function calculate(){
    nome = document.getElementById("name").value;
    cellphone = document.getElementById("cellphone").value;
    email = document.getElementById("email").value;

    let div = document.getElementById("resultado");

    let count;
    let count2;

    let price;
    let price2;

    let pedidoPrincipal;
    let pedidoAcompanhamento;

    switch(choose){
        case 'potato': 
            count = countPotato;
            price = 30.00 * countPotato;
            pedidoPrincipal = "Bife com Batata";
        break;
        case 'chicken':
            count = countChicken;
            price = 25.00 * countChicken;
            pedidoPrincipal = "Coxa de Frango Crocante";
        break;
        case 'meat':
            count = countMeat;
            price = 22.00 * countMeat;
            pedidoPrincipal = "Carne de Panela";
        break;
    }

    switch(choose2){
        case 'farofa':
            count2 = countFarofa;
            price2 = 10.00 * countFarofa;
            pedidoAcompanhamento = "Farofa";
        break;
        case 'salade':
            count2 = countSalade;
            price2 = 8.00 * countSalade;
            pedidoAcompanhamento = "Salada";
        break;
        case 'torresmo':
            count2 = countTorresmo;
            price2 = 12.00 * countTorresmo;
            pedidoAcompanhamento = "Torresmo";
        break;
    }

    let total = price + price2;

    div.innerHTML = `
        <br>
        <p>Caro ${nome}</p>
        <p>Seguem os dados do seu pedido.</p>
        <p>O seu pedido é: </p>
        <ul>
            <li>Prato: ${pedidoPrincipal} - Preço unitario: R$ ${price} Quantidade: ${count} Total: R$ ${price}</li>
            <li>Prato: ${pedidoAcompanhamento} - Preço unitario: R$ ${price2} Quantidade: ${count2} Total: R$ ${price2}</li>
        </ul>
        <br><br>

        <h2>Preço final R$ ${total}</h2>
    `;

    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}