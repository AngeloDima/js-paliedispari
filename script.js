

// // Chiedo all’utente di inserire una parola

// const word = prompt('Dammi una parola');

// const isPalindroma = checkPalindroma(word);

// console.log('è palindroma:', isPalindroma)







//     // funzione per capire se la parola è palindrome



// function checkPalindroma(text){
    
//     let reversedText = '';
//     // ciclo i caratteri di text
//      console.log('versione 1');

//     for(let i = 0; i < text.length; i++){
//         const char = text.charAt(i);
        
//         reversedText = char + reversedText; 
//         console.log(reversedText);
//     }




//     console.log('reversedText', reversedText);
//     // controllo se il testo risultante è uguale a quello di input
//     const isEqual = reversedText === text;
//     // ritorno vero se è palindroma altrimenti è falso
//     return isEqual;

// }








// PARI O DISPARI           Altro esercizio

let SceltaUtente = '';

while(SceltaUtente !== 'pari' && SceltaUtente !== 'dispari'){ 
     SceltaUtente = prompt('Pari o dispari?'); 
     if (SceltaUtente !== undefined){
          SceltaUtente = SceltaUtente.toLowerCase();
     }  
}




// chiedo all'utente un numero tra 1 e 5

let number = 0;

while (isNaN(number) || number < 1 || number > 5){
    number = parseInt(prompt('Scrivi un numero tra 1 e 5'));
}


// generiamo un numero 
const numberPC = getRandomNumber(1, 5);

// sommiamo 

const sum = number + numberPC;


// verifichiamo se la somma è pari o dispari
const pariODispari = isOddOrEven(sum) ? 'pari' : 'dispari';;


// dichiariamo chi ha vinto
if(SceltaUtente === pariODispari){
    console.log(SceltaUtente, sum, 'hai vinto!');
}else{
    console.log(SceltaUtente, sum, 'hai perso!');
}


function getRandomNumber(min, max){
    const range = max - min + 1

    const random = Math.floor(Math.random() * range) + min;

    return random;

}

function isOddOrEven(numberToCheck){
    return ( numberToCheck % 2 === 0 ) 
}

