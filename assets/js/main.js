// revision Js 1


// # Exo 1 Les methods string prompt etc
// 1. Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi le 1er caractere du prénom dans une alert.

// let prenom = prompt("Entrez votre prenom")
// alert(prenom.charAt(0))


// 2. Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi tout sauf le premier caractère du prénom dans une alert

// let prenom = prompt("Entrez votre prenom")
// alert(prenom.slice(1))
// alert(prenom.substring(1)) // lui apparementil coupe pas. il prend la valeur "coupé" mais il la coupe pas du string d'origin e






// 3. Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte si le prénom est sufisament long sinon on dit a l'utilisateur que son prénom était trop court. (prompt, pas de boucle)

// let prenom = prompt("Entrez votre prenom")

// if (prenom.length < 5){
//   alert("votre prenom est trop court")
// }
// else{
//   alert(prenom.charAt(5))
// }




// 4. Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte, si le prénom est suffisament long, sinon il renvoi le dernier caractère est prévient l'utilisateur que son prénom était trop court, qu'il n'était que de X caractère

// let prenom = prompt("Entrez votre prenom")

// if (prenom.length < 5){
//   alert(`votre prenom est trop court car il fait seulement ${prenom.length} lettres, sa dernière étant: ${prenom.charAt(prenom.length-1)}`) 
  
// }
// else{
//   alert(prenom.charAt(5))

// }




// 5. Créer un programme qui renvoi ce que l'utilisateur rentre d'abord un minuscule (meme si il l'écrit en majuscule), puis la même chose en majuscule (meme si il l'écrit en minuscule), puis  avec la première lettre en majuscule et le reste en minuscule puis avec la premiere en minuscule et le reste en majuscule(toujours prompt sans boucle)

// let a = prompt("Entrez votre prenom")
// console.log(a)

// a = a.toLowerCase()
// console.log(a)

// a = a.toUpperCase()
// console.log(a)

// a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
// console.log(a)

// a = a.charAt(0).toLowerCase() + a.slice(1).toUpperCase()
// console.log(a)



//---------------------------------------------------------------------------------------------------------------//

// ## Exo 2(les tableaux)
// 1. Créer un tableau avec 5 éléments, affiche dans la console le 3 eme élément
// let x = [
//     "Patate",
//     "Pomme",
//     "Poire",
//     "Banane",
//     "Cerise",
// ]
// console.log(x[2]);

// 2. Affiche dans la console le 1er élément et le dernier élément

// console.log(x[0]+" "+x[3]);

// 3. Affiche dans la console le 2eme élémént avec toutes ses lettres en majuscule saufe la derniere 

// console.log(x[1].slice(5).toUpperCase() + x[1].charAt(5).toLowerCase());

// 4. Affiche dans la console le 4eme élément du tableau mais uniquement sa première lettre

// console.log(x[3].charAt(0));

// 5. Affiche dans la console le 5eme élément du tableau mais sans sa première lettre
// console.log(x[4].slice(1));

// 6. Affiche dans la console le seulement les 2 premiereres lettres du 1er element , la premiere que tu mettras en minuscule et la seconde en majuscule

// console.log(x[0].charAt(0).toLowerCase() + x[0].charAt(1).toUpperCase());

// 7. Affiche dans la console la concaténation du premier élément avec le 3eme élément

// console.log(x[0] + " " + x[2]);

// 8. Affiche dans la console la premiere moitié du 2eme élément avec la seconde moitié du dernier élément



// 9. Affiche dans la console les deux première lettre du 3eme élément en majuscule avec tout le 5eme élément en minuscule

// console.log(x[3].substring(0, 2).toUpperCase() , x[4].toLowerCase());

// 10. Créer une variable dans la quelle tu stockeras la concaténation des deux premieres lettre de chaque élément du tableau dont la premiere lettre sera en minuscule et la seconde sera en majuscule et affiche le résultat dans la console

// let nom = "";
// x.forEach((item)=>{
//     nom += item.charAt(0).toLowerCase() + item.charAt(1).toUpperCase();
// });
// console.log(nom);






//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// ## Exo 3(boucle forEach) Partie 1
// 1. Créer un tableau avec 9 prénoms
// let c = [
//     "Abdel",
//     "Amine",
//     "Antoine",
//     "Bilal",
//     "Gauthier",
//     "Mustafa",
//     "Salim",
//     "Mahad",
//     "Said",
// ]

// 2. Affiche chaque élément dans un console log

// c.forEach(element =>{
//     console.log(element)
// });

// 3. Affiche chaque premiere lettre de chaque élément dans un console log

// c.forEach(element => {
//     console.log(element.charAt(0));
// })

// 4. Affiche chaque seconde lettre de chaque élément dans un console log
// c.forEach(element => {
//     console.log(element.charAt(1));
// })

// 5. Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme exemple : si le mot et bonjour alors on devra affiché obonjour

// c.forEach(element => {
//     console.log(element.charAt(1)+element);
// })

// 6. Affiche tous les prénoms dans un console log dont l'indice est pair 

// c.forEach((element,index) => {

//     if (index%2 == 0) {
//         console.log(element); 
//     }
// });





//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// ## Exo 3(boucle forEach) Partie 2
// 1. Créer un tableau avec 9 prénoms

let c = [
    "Abdel",
    "Amine",
    "Antoine",
    "Bilal",
    "Gauthier",
    "Mustafa",
    "Salim",
    "Mahad",
    "Said",
    "Flavien",
    "Yvan",
    "Emiliano",
    "Norbert",
]

// 2. Affiche tous les prénoms dont l'indice est impair en majuscule


// c.forEach((element,index) => {
//      if (index%2 == 1) {
//          console.log(element); 
//      }
//  });

// 3. Affiche tous les prénoms dont l'indice est pair avec la premiere lettre en majuscule

// c.forEach((element,index) => {
//      if (index%2 == 0) {
//          console.log(element.charAt(0).toUpperCase()+element.slice(1)); 
//      }
//  });


// 4. Affiche les prénoms impair ET plus long que 4caractères

// c.forEach((element,index) => {
//      if (index%2 == 1 && element.length > 4) {
//          console.log(element); 
//      }
//  });

// 5. Affiche les prénoms pair et plus long que 4caractères avec uniquement leur premiere lettre et en plus en majuscule (il n'y aura qu'une lettre en majuscule par mot)

// c.forEach((element,index) => {
//     if (index%2 == 0 && element.length > 4) {
//         console.log(element.charAt(0).toUpperCase()); 
//     }
// });

// 6. Affiche tous les prénoms commencant par (a,e,m,f,y,n) mais pas les autres !

c.forEach(element =>{
    console.log(element)
});


// 7. Affiche tous les prénoms plus long que 5 caractères et commencant par (a,e,m,f,y,n) 