const Jedi = [];
// console.log(Jedi);

Jedi [0] = ("Luke");
// console.log(Jedi);

Jedi.push ("Obi-wan Kenobi");
// console.log(Jedi);

Jedi.unshift("Yoda");
// console.log(Jedi);

console.log(Jedi [1]);

Jedi.pop();
// console.log(Jedi);

Jedi.shift();
console.log(Jedi);

/* Jedi.splice(0,1)
console.log(Jedi); */

const sithLords = ["Darth Vader", "Darth Sidious","Darth Maul"];

const imperialOfficers = ["Grand Moff Tarkin" , "Orson Krennic"]

const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains);

starWarsVillains.splice(0,2)
console.log(starWarsVillains);

const Droids = {
    astromech:"R2-D2", 
    protocol: "C-3PO", 
    assassin: "IG-88"
};
// console.log(Droids);
console.log(Droids ["astromech"]);

console.log(Droids.protocol);

Droids.assassin = "IG-11"
/*
    OR 
Droids["assassin"]= "IG-11"
*/ 
console.log(Droids);




