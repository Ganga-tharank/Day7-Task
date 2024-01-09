var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
}

// a)

const countries1= [
    {name: "Afghanistan", region:"Asia"},
    {name:"India", region:"Asia"},
    {name:"Japan", region:"Asia"},
    {name:"Germany", region:"Europe"},
];
const asiaCountries = countries1.filter(country => country.region==="Asia");
console.log(asiaCountries);


// b)

const countries = [
    {name:"Australia", population:150000},
    {name:"India", population:250000},
    {name:"America", population:180000},
];
const countriesWithLowPopulation = countries.filter(country => country.population < 2000000);
console.log(countriesWithLowPopulation);


// c)

let countries2 = [
    {name:"Afghanistan", captial:"kabul", Flag:"ialamic Emirates of afghansitan"},
    {name:"India", captial:"NewDelhi", Flag:"the tricolor"},

];
countries.forEach(country =>{
    console.log(`Name: ${country.name},capital: ${country.captial},
    Flag: ${country.flag}`);
});

// d)

const country =[
    {name:"London",population:140000},
    {name:"Dubai",population:250000},
    {name:"Russia",population:150000},
];
const totalPopulation = country.reduce((accumulator, country)=> accumulator + country.population);
console.log(`Total Population: ${totalPopulation}`);


// e)

const country1 =[
    {name:"India", currency: "INR"},
    {name:"America", currency: "USD"},
    // {name:"Countryc", currency: "USD"},
];
const countryUsingUSD = countries.find(country => countries.currency === "USD");
if (countryUsingUSD){
    console.log(`The country using US dollars as currency is : ${countryUsingUSD.name}`);
}else{
    console.log(`No country found using US dollars as currency.`);
}