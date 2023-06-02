let numeros = [1,2,3,4,5,6,7,8]

var keys = ''
var values = ''


for (n in numeros){
    keys += `${n}, `
}
console.log(`Essas são as posições dos valores ${keys}`);

for (n of numeros){
    values += `${n}, `
}
console.log(`Esses são os valores ${values}`);
