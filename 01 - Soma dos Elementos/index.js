const input = [1, 543, 567, 7856, 32, 54]

const resultado = input.reduce((acc, cur) => { // acc = accumulator && cur = currency
    return acc + cur
})
 
  console.log(resultado);