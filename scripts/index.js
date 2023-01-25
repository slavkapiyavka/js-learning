// // const THIS_IS_CONSTANTA = 1; but this is const justConst = просто константа, просто неизменяемая переменная
// // 1
// const NUM = 3;
// console.log(NUM);

// // 2
// const A = 10,
//       B = 2;
// console.log(`сумма: ${A + B}, разность: ${A - B}, произведение: ${A * B}, частное: ${A / B}`);

// // 3
// const C = 15;
// const D = 2;
// const result = C + D;
// console.log(result);

// // 4
// const a = 10, b = 2, c = 5;
// console.log(a + b + c);

// // 5
// const A_5 = 17;
// const B_5 = 10;
// const C_5 = A_5 - B_5;
// const D_5 = 7;
// const RESULT_5 = C_5 + D_5;
// console.log(RESULT_5);

// // Как получить null?
// // задать самостоятельно

// // Как получить undefined?
// // задать самостоятельно, либо объявить переменную без присвоения значения
// const UNDEF = undefined;
// console.log(typeof typeof UNDEF);

// const NICKELBACK = 1675%38;
// console.log(NICKELBACK);

// 1)Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false

// 2)Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false

// let test = true;

// if(test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// test = false;

// test ? console.log('Верно') : console.log('Не верно');

// let test = true;

// if(!test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// test = false;

// !test ? console.log('Верно') : console.log('Не верно');

// 1)Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// 2)Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// 3)Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// 4)Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 5) console.log(5 && 3)
// 6) console.log(0 && 3)
// 7) console.log(5 || 3)
// 8) console.log(0 || 3)
// 9) console.log(0 || 3 && 6)
// 10) console.log(0 && 3 || 6)

// // 4 Задание
// a > 2 && a < 11 || b >= 6 && b < 14 ? console.log('Верно') : console.log('Неверно');


// // 1 Задание
// let a = 5;
// a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно'); // Неверно
// a = 0;
// a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно'); // Неверно
// a = -3;
// a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно'); // Неверно
// a = 2;
// a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно'); // Верно

// // 2 Задание
// let a = 5;
// a === 0 || a === 2 ? console.log(a += 7) : console.log(a /= 10);
// a = 0;
// a === 0 || a === 2 ? console.log(a += 7) : console.log(a /= 10);
// a = -3;
// a === 0 || a === 2 ? console.log(a += 7) : console.log(a /= 10);
// a = 2;
// a === 0 || a === 2 ? console.log(a += 7) : console.log(a /= 10);

// // 3 Задание
// let a = 1;
// let b = 3;
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);
// a = 0;
// b = 6;
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);
// a = 3;
// b = 5;
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);

// 5 Задание
console.log(5 && 3) // 3
// 6 Задание
console.log(0 && 3) // 0
// 7 Задание
console.log(5 || 3) // 5
// 8 Задание
console.log(0 || 3) // 3
// 9 Задание
console.log(0 || 3 && 6) // 6
// 10 Задание
console.log(0 && 3 || 6) // 6
