

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
