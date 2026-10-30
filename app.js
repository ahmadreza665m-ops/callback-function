const provpoang = [18,22,15,28,20]
const raknat = (poang) => {
let summa=0
for(siffra of poang) {
    summa+=siffra
}
return summa/poang.length

}
const svar = raknat(provpoang)
console.log(svar)



























const dubblera = (tal) => {
    return tal*2;
}

const kortfunction = (tal,callback) => {
    return callback(tal)
}
console.log(kortfunction(5,dubblera))












const plustre = (tal)=> {
    return tal + 3
}

const rakna= (nummer) => {
    return plustre(nummer)
}
console.log(rakna(20));








const frukter =(perkilo) => {
    return perkilo + 4 
}

const gurka = (styck) => {
    return frukter(50)
}

console.log(gurka(15))






const halsa = (namn) => {
    return "hej" + namn
}

const visa = (person, funktion) => {
    return funktion(person)
}

console.log(visa("ali",halsa))







const dubbla = (tal) => {
    return tal * 2
}

const raknare = (functionen) => {
    return functionen(10)
}

console.log(raknare(dubbla))







const iphone = (simkort) => {
    return simkort + 3
}

const dator = (ipad) => {
    return ipad (8)
}

console.log(dator(iphone))











