

const map = (arr, callback) => {
    let array = []
    for(let i = 0; i < arr.length; i++) {
        let result = callback(arr[i])
        array.push(result)
    }
    return array
}
const array1 = [1, 4, 9, 16]

// console.log(map(array1, x => x * 2))


const words =  ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'Massachussetts'];

const filter = (arr, callback) => {
    let array = [] 
    for( let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) == true) {
            array.push(arr[i])
        }
    }
    return array
}

// console.log(filter(words, word => word.length > 6))

const reduce = (arr) => {
    let startingPoint = 0
    for (const value of arr) {
        startingPoint += value
    }
    return startingPoint
}

const numbers = [1,2,3,4,5]

// console.log(reduce(numbers))