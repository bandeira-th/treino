//array methods

const secName = ['b', 'a', 'n', 'd', 'e', 'i', 'r', 'a']
const lastName = ['m', 'e', 'l', 'o'] 


//slice
console.log(secName.slice(2))//retorna parte da array a partir do index determinado 
console.log(secName.slice(2, 6))//retorna um corte do primeiro índice passado ao segundo índice excluindo (ultimo não incluso)

//reverse
//console.log(secName.reverse())
//console.log(lastName.reverse())

//concatenate
console.log(secName.concat(lastName))
console.log(...secName, ...lastName)

//Join
console.log(lastName.join(''))//with nothing between '' it puts all array elements together(you can put anything between'')