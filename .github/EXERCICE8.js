function totalAvecRemise(total, remise){
    return total - (total * remise / 100);
}
let total = Number(prompt("Total HT : "));
let remise = Number(prompt("Remise en % : "));
console.log(totalAvecRemise(total, remise));
