let countPotato = 0;
let countChicken = 0;
let countMeat = 0;

let countFarofa = 0;
let countSalade = 0;
let countTorresmo = 0;

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
        break;
        case 'chicken':
            countChicken = countChicken + 1;
            document.getElementById("chicken").innerHTML = countChicken;
        break;
        case 'meat':
            countMeat = countMeat + 1;
            document.getElementById("meat").innerHTML = countMeat;
        break;
        case 'farofa':
            countFarofa = countFarofa + 1;
            document.getElementById("farofa").innerHTML = countFarofa;
        break;
        case 'salade':
            countSalade = countSalade + 1;
            document.getElementById("salade").innerHTML = countSalade;
        break;
        case 'torresmo':
            countTorresmo = countTorresmo + 1;
            document.getElementById("torresmo").innerHTML = countTorresmo;
        break;
    }
}

function decrementCount(name)
{
    switch(name){
        case 'potato':
            countPotato = countPotato - 1;
            document.getElementById("potato").innerHTML = countPotato;
        break;
        case 'chicken':
            countChicken = countChicken - 1;
            document.getElementById("chicken").innerHTML = countChicken;
        break;
        case 'meat':
            countMeat = countMeat - 1;
            document.getElementById("meat").innerHTML = countMeat;
        break;
        case 'farofa':
            countFarofa = countFarofa - 1;
            document.getElementById("farofa").innerHTML = countFarofa;
        break;
        case 'salade':
            countSalade = countSalade - 1;
            document.getElementById("salade").innerHTML = countSalade;
        break;
        case 'torresmo':
            countTorresmo = countTorresmo - 1;
            document.getElementById("torresmo").innerHTML = countTorresmo;
        break;
    }
}