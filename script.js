/*
document.body.innerHTML += 'Řekl: "Ahoj světe!"';
document.body.innerHTML += '<br>';
document.body.innerHTML += 42;
document.body.innerHTML += '<br>';
document.body.innerHTML += '42';
document.body.innerHTML += '<br>';
document.body.innerHTML += 5 + 12;
document.body.innerHTML += '<br>';
document.body.innerHTML += 5 * 12;
document.body.innerHTML += '<br>';
document.body.innerHTML += 5 / 12;
document.body.innerHTML += '<br>';
document.body.innerHTML += 5 + 12 * 2;
document.body.innerHTML += '<br>';
document.body.innerHTML += 12 / 5;
document.body.innerHTML += '<br>';
document.body.innerHTML += 27 % 5;
*/
//document.body.innerHTML += '';
//document.body.innerHTML += 0;
//document.body.innerHTML += '0';
/*
document.body.innerHTML += Math.round(12.521);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(12.65);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.ceil(12.6);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(Math.random() * 6) + 1;
*/

/* CVIČENÍ
document.body.innerHTML += 'Měsíční plat: ';
document.body.innerHTML += 7 * 320 * 21 + 'Kč';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daň: ';
document.body.innerHTML += Math.floor(0.15 * (0.4 * (7 * 320 * 21))) + 'Kč';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daň z proměnné mzdy: ';
const plat = 40000;
document.body.innerHTML += Math.floor(0.15 * (0.4 * plat)) + 'Kč';
document.body.innerHTML += '<br>';

document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Jak dlouhý je Pán prstenů?';
document.body.innerHTML += '<br>';

document.body.innerHTML += Math.floor(223 / 60) + ':';
document.body.innerHTML += 223 % 60;
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'han' + '.' + 'frisonsova' + '@gmail.com';
*/
/*
const cisloNaKostce = Math.floor(Math.random() * 6) + 1;
document.body.innerHTML += 'Na kostce padlo ' + cisloNaKostce;
*/
/*
document.body.innerHTML += '<br>';
let sazba = 500;
let vyplata = 8 * 21 * sazba;
document.body.innerHTML += vyplata;

document.body.innerHTML += '<br>';
sazba = 600;
vyplata = 8 * 21 * sazba;
document.body.innerHTML += vyplata;
*/
/*
//na toto pozor, podle toho jak napisu hodnoty tak to muze delat neco jineho napr 1213
document.body.innerHTML += '<br>';
document.body.innerHTML += '12' + 13;
*/
/* CVICENI
document.body.innerHTML += 'Náhodné číslo' + '</br>';
document.body.innerHTML += Math.random();
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.ceil(Math.random() * 1000) + 1;
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';

let wageInEur = 20;
let wageInCzk = Math.round(wageInEur * 24.55);
document.body.innerHTML += 'Mzda v korunách: ' + wageInCzk + ' Kč';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';

const start = 15;
const delka = 18;
const konec = (start + delka) % 24;
document.body.innerHTML += 'Běžec doběhne v ' + konec + ' hod';
*/
// Vstup od uživatele a převod na číslo
/*document.body.innerHTML += '<br>';
const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
document.body.innerHTML += 'Běžec doběhne v ' + konec + ' hod';
*/
//cvičení vstup a výstup
/*
const jmeno = prompt('Zadej jméno a příjmení:');
const vek = Number(prompt('Zadej svůj věk:'));
document.body.innerHTML += jmeno + ', věk: ' + vek;
*/
//cviceni hodinova sazba
/*const hodinovaSazba = Number(prompt('Zadej svou hodinovou sazbu v korunách'));
const hrubaMzda = hodinovaSazba * 8 * 21;
document.body.innerHTML += 'Vaše hrubá mzda je ' + hrubaMzda + ' korun.';
*/
/*
const hodinovaSazba = Number(prompt('Zadej svou hodinovou sazbu v korunách'));
const pracovniDoba = Number(prompt('Jaká je pracovní doba?'));
const odpracovaneDny = Number(prompt('Kolik hodin jsi odpracoval měsíci?'));
const hrubaMzda = hodinovaSazba * pracovniDoba * odpracovaneDny;
document.body.innerHTML += 'Vaše hrubá mzda je ' + hrubaMzda + ' korun.';
*/
//OBJEKTY
/*
const address = {
  celeJmeno: {
    krestniJmeno: 'Jan',
    prijmeni: 'Nový',
  },
  ulice: 'Národní',
  cislo: 20,
  mesto: 'Praha 1',
  smerovaciCislo: '110 00',
};

address.celeJmeno.krestniJmeno = 'Josef';s

document.body.innerHTML += '<p>' + address.celeJmeno.krestniJmeno + '</p>';
*/
//PŘIPRAVENÉ OBJEKTY
/*
document.body.innerHTML += window.innerWidth;
*/
//DYNAMICKÁ ZMĚNA NÁZVU STRÁNKY
/*
document.title = 'Kimonové šaty';
*/

//CVIČENÍ REALITKA
/*
const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML = '<h1>' + 'Inzerát na byt' + '</h1>';
document.body.innerHTML += 'Dispositon: ' + apartment.disposition + '<br>';
document.body.innerHTML +=
  'Florage: ' + apartment.area.floorage + ' ' + apartment.area.units + '<br>';
document.body.innerHTML +=
  'Balcony: ' + apartment.area.balcony + ' ' + apartment.area.units + '<br>';

document.body.innerHTML +=
  'Price: ' + apartment.price.rent + ' ' + apartment.price.currency + '<br>';

const mesto = apartment.city;
const castMesta = apartment.district;

document.body.innerHTML += 'City: ' + mesto + ', ' + castMesta + '<br>';

apartment.status = 'taken';

document.body.innerHTML += 'Apartment is ' + apartment.status + '<br>';
*/
/*Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.
*/
//CVIČENÍ KNIHOVNA
/*
const knihovna = {
  regal: {
    kniha1: {
      nazev: 'Solaris',
      autor: 'Stanislav Lem',
      pocetStran: 287,
      zanr: 'sci-fi',
    },
    kniha2: {
      nazev: 'Stopařův průvodce po galaxii',
      autor: 'Dougles Adams',
      pocetStran: 586,
      zanr: 'sci-fi',
    },
  },
};
*/

//CVIČENÍ OČKOVÁNÍ - OBJEKTY

const person = {
  name: prompt('Zadej jméno a příjmení:'),
  age: Number(prompt('Zadej svůj věk:')),
  language: prompt('EN / CZ'),
};
document.body.innerHTML =
  '<h1>' +
  person.name +
  ', věk: ' +
  person.age +
  ', jazyk: ' +
  person.language +
  '</h1>';

/*
Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.*/
