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

const fizz = "Fizz";
const buzz = "Buzz";

const body = document.querySelector('body');

const my_div = document.createElement('div');
my_div.classList.add('container');
body.append(my_div);

const my_row = document.createElement('div');
my_row.classList.add('row');
my_div.append(my_row);

for (let i = 1; i < 101; i++ ) {
    
    const my_col = document.createElement('div');
    my_col.classList.add('col-2', 'd-flex', 'justify-content-center', 'align-items-center', 'h-80', 'border', 'border-5');

    if ((i % 3 == 0) && (i % 5 != 0)) {
        my_col.classList.add('bg-success');
        my_col.append(fizz);
        console.log(fizz);
    }

    else if ((i % 5 == 0) && (i % 3 != 0)) {
        my_col.classList.add('bg-warning');
        my_col.append(buzz);
        console.log(buzz);
    }

    else if ((i % 3 == 0) && (i % 5 == 0)) {
        my_col.classList.add('bg-danger');
        my_col.append(fizz + buzz);
        console.log(fizz + buzz);
    }

    else {
        my_col.classList.add('bg-primary');
        my_col.append(i);
        console.log(i);
    }

    my_row.append(my_col);
}