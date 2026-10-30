const provpoang = [18,22,15,28,20]
const rakna = (poang) => {
let summa=0
for(siffra of poang) {
    summa+=siffra
}
return summa/poang.length

}
const svar = rakna(provpoang)
console.log(svar)



const dubblera = (tal) => {
    return tal*2;
}
console.log(dubblera(5));
