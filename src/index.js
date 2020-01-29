'use strict'

const last = (array) => array[array.length - 1]

const prev = (array) => array[array.length - 2]

const fibonacci = (condition = 350) => {

    const arrayOfFibonacci = [0, 1]
    
    while (last(arrayOfFibonacci) <= condition){
        arrayOfFibonacci.push(last(arrayOfFibonacci) + prev(arrayOfFibonacci))
    }
    return arrayOfFibonacci
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}