/*
    Scrivi un programma che stampi in console i numeri da 1 a 100,
    ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
    Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per un altro?
    Abbiamo visto qualcosa di particolare che possiamo usare?
*/

/*
    - Scrivere un programma che stampi i numeri da 1 a 100;
    - Se il n è divisibile per 3 (% 3 == 0) stampi "Fizz";
    - Se il n è divisibile per 5 (% 5 == 0) stampi "Buzz";
    - Se il n è divisibile per 3 e per 5 stampi "FizzBuzz";

*/

fizz = "Fizz";
buzz = "Buzz";

for (let i = 1; i < 101; i++ ) {
    if ((i % 3 == 0) && (i % 5 != 0)) {
        console.log(fizz);
    }

    else if ((i % 5 == 0) && (i % 3 != 0)) {
        console.log(buzz);
    }

    else if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(fizz + buzz);
    }

    else {
        console.log(i);
    }
}