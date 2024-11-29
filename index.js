/* if-else

1. Попросити користувача ввести послідовно два числа через prompt (дві операції).
(Перетворення на Number зробити явним - це ще по одному кроку на кожне число)

Якщо сумма цих двох чисел ділиться на 5 - вивести alert, що сума кратна 5
Інакше - вивести, що сума не кратна 5
(одна перевірка на if, і гілка else, якщо ні)
*/

let num1 = Number(prompt('Enter the first number'));
let num2 = Number(prompt('Enter the second number'));
let sum = num1+num2;

if(sum % 5 === 0) {
    alert('The sum is a multiple of 5');
} else {
    alert('The sum is not a multiple of 5');
}



/*
2. Написати функцію, яка приймає сторону квадрата та повертає його площу
*/
const side = 4;
let square = 0;

if(side) {
    square = side**2;
}
console.log(square);


/*
3. Написати функцію, яка виводить промптом "меню" у вигляді
     "1 - Чай
      2 - Кава
      3 - Сік
      4 - Вода"
(перенос рядка у модалці можна зробити за допомогою "\n")
і очікує від користувача цифру, що відповідає напою. 
При виборі чогось доступного - вивести алерт на кшталт
"Ви обрали сік" або "Ви обрали воду" (залежно від того, 
що там користувач обрав). Якщо введено щось не те 
- вивести "Такого напою у нас нема"
*/

let menu = Number(prompt('Menu: \n1 - Tea \n2 - Coffee \n3 - Juice \n4 - Water \n Choose a number'));

if(menu===1) {
    alert('You choes tea');
} else if(menu===2) {
    alert('You choes coffee');
} else if(menu===3) {
    alert('You choes juice');
} else if(menu===4) {
    alert('You choes water');
} else {
    alert('We dont have such drink')
}



/*
4. Користувач вводить суму покупки.
Обчислити та вивести остаточну суму покупки з урахуванням знижки.
Знижка 3% надається, якщо сума покупки більша за 500 грн.,
 а знижка 5% - якщо сума покупки більша за 800 грн.
  Використати тернарний оператор
  */
  
let amount = Number(prompt('Enter the purchase amount'));
let totalAmount;

if(amount >= 800) {
    totalAmount = amount * 0.95; 
    alert('The total amount is'+ totalAmount);
} else if(amount >= 500 && amount < 800){ 
    totalAmount = amount * 0.97; 
    alert('The total amount is'+ totalAmount);
} else {
    alert('Total amount is without discount')
}  



/*
5. Реалізувати функцію, яка приймає два числа і перевіряє, 
чи ділиться перше на друге націло (без залишку).
 Функція має повертати булеве значення: true,
 якщо ділиться без залишку, false - не ділиться без залишку.
*/   

let number1 = 8;
let number2 = 2;

if (number1 % number2 === 0) {
    console.log(true);
} else {
    console.log(false);
}



