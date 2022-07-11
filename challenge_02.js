/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// let isAge, firstName
// firstName = prompt("Bitte deine Name eingeben" );
// isAge = Number(prompt("Bitte deine alter eingeben"));
// // const cond = true;

// switch (true) 
// {
//     case (isAge >= 0 && isAge <= 5):
//         console.log(firstName + " trinkt Milch")
//         break;
//     case (isAge >= 6 && isAge <= 12):
//         console.log(firstName + " trinkt Saft")
//         break;
//     case (isAge >= 13 && isAge <= 17):
//         console.log(firstName + " trinkt Cola")
//         break;
//     case (isAge >= 17):
//         console.log(firstName + " trinkt Wein")
//         break;
//     default: 
//         console.log(firstName + " etwas ist schief gelaufen!")
//         break;
// }
// /************ IF  -  ELSE IF  ************/
// // mit alternativen Fällen (älter, jünger, gleich alt)

let isAge, firstName
firstName = prompt("Bitte deine Name eingeben" );
isAge = Number(prompt("Bitte deine alter eingeben"));

if (isAge >= 0 && isAge <= 5) // 1. Variante
{
   console.log(firstName + " trinkt Milch");
}
else if (isAge >= 6 && isAge <= 12) // 2. Fall
{
	console.log(firstName + " trinkt Saft");
}
else if (isAge >= 13 && isAge <= 17) // 2. Fall
{
	console.log(firstName + " trinkt Cola");
}
else if (isAge > 18) // 2. Fall
{
	console.log(firstName + " trinkt Wein");
}

// evtl. weitere Alternative(n) else if() {}
else // gemeinsamer else-zweig
{
    console.log(firstName + ", etwas ist schief gelaufen!");
}


