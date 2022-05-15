//1

let a = 4;
let b = 0;
let c = ++a;
let d = b++;
console.log(a, b, c, d);


//2
let e = 3;
let f = 2;
let x = 1 + (e +=2);
let y = 1 + (f *=2);
console.log(e, f, x, y);

//3
let yearChampion = prompt('Чемпион Англии по футболу');

if (yearChampion < 2011) {
    console.log( 'Статистика еще не велась' );
} else if (yearChampion > 2022) {
    console.log( 'Все лучшее впереди!' );
} else if (yearChampion === '2020') {
    console.log( 'Ливерпуль');
}
else if (yearChampion === '2015' || year === '2017'){
    console.log( 'Челси');
}
else if (yearChampion === '2012' || yearChampion === '2014' || yearChampion === '2018' || yearChampion === '2019' || yearChampion === '2021'){
    console.log( 'Манчестер Сити');
}
else if (yearChampion === '2011' || yearChampion === '2013'){
   console.log( 'Манчестер Юнайтед');
}
else if (yearChampion === '2016'){
    console.log( 'Лестер Сити');
}

let year = prompt('Чемпионат Англии', '');

let message = year < 2011 ? console.log('Статистика еще не велась') :
year > 2022 ? console.log('Статистика еще не велась') :
year == 2020 ? console.log('Ливерпуль') :
year == 2016 ? console.log('Лестер Сити') :
year == 2015 || year == 2017  ? console.log('Челси') :
year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021  ? console.log('Манчестер Сити') :
year == 2011 || year == 2013  ? console.log('Манчестер Юнайтед'):
console.log(message);

//4

let user = prompt("Пользователь", '');

if (user === 'Админ'){
    let password = prompt('Пароль', '');

    if (password === 'Я главный') {
        console.log( 'Здравствуйте!');
    } else if (password === '' || password === null){
        console.log( 'Отменено');
    } else {
        console.log( 'Неверный пароль');    
    }

} else if (user === null || user === ''){
    console.log( 'Отменено');
} else {
    console.log( 'Я вас не знаю' );
}


//5

for (let i = 7; i <= 15; i++) {
    if(i % 2 == 1) {
        console.log( i );
}     else if (i == 12) break; 
}
    console.log( '12. Цикл прерван');


//6

//for (let j = 0; j < 5; j++) {
//    console.log( `number ${j}!` );
//}

let j = 0;
while (j < 5) {
    console.log( `number ${j}!` );
    j++;  
}