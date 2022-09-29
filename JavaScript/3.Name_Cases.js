let personName = "Shayan ahmed";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
personName = personName.toLowerCase();
personName = personName.split(' ');
for (var i = 0; i < personName.length; i++) 
personName[i] = personName[i].charAt(0).toUpperCase() + personName[i].slice(1);
personName.join(' ')