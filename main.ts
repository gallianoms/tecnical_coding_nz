export {}

//* Exercise 1. Multiply 2 numbers without *

const multiply = (num1: number, num2: number): number => {
  // return num1 / (1 / num2 )

  let sum = 0
  const positive = Math.abs(num2) === num2
  for (let i = 0; i < Math.abs(num2); i++) {
    sum = positive ? sum + num1 : sum - num1
  }

  return sum
}

// console.log(multiply(2, 4)) // 8
// console.log(multiply(2, -4)) // -8

//* Exercise 2. Return the biggest number of array (loop just ONE)

const arr = [1, 2, 6, 3, 2, 7, 3]

const getBiggest = arr => {
  // const newArr = arr.sort((a,b) => b - a)
  // return newArr[0]

  // return arr.reduce((acc,num) => acc > num ? acc : num)

  return Math.max(...arr)
}

// console.log(getBiggest(arr))

//* Exercise 3. Write func to eliminate `undefined`, `false`, `0`, `null` (loop just ONE)

const array = [
  false,
  1,
  false,
  3,
  undefined,
  5,
  'a',
  'g',
  3,
  undefined,
  true,
  0,
  null,
  0,
  0,
]
// Output: [1, 3, 5, 'a', 'g', 3]

const clean = array => {
  // return array.filter(item => {
  //   return (item !== false && item !== undefined && item !== 0 && item !== null)
  // })

  return array.reduce((acc, item) => {
    if (item) {
      acc.push(item)
    }
    return acc
  }, [])
}

// console.log(clean(array))

//* Exercise 4. Write func to flat array 1 level

const arrAux = [[1, 2], [[3, 4]], [[[5, 6]]]]
// Output: [1, 2, [3, 4], [[5, 6]]]

const flatten = arrAux => {
  return arrAux.flat()

  // return arrAux.reduce((acc, item) => {
  //   acc.push(item.flat())
  //   return acc
  // })

  // return arrAux.reduce((acc,item) => acc.concat(item))
}

// console.log(flatten(arrAux))

// Exercise 5. Number of times the words repeats in the string

const str = 'This is a repeated test a is a'

const repeated = str => {
  const words = str
    .toLowerCase()
    .split(' ')
    .reduce((acc: {}, word: string) => {
      acc[word] = (acc[word] ?? 0) + 1
      return acc
    }, {})

  return Object.entries(words)
    .sort((a: unknown, b: unknown) => b[1] - a[1])
    .slice(0, 1)
    .flat()
}

// console.log(repeated(str))

// Check if a word is palindrome
const isPalindrome = str => {
  const strInitial = str
    .toLowerCase()
    .split('')
    .filter(char => char !== ' ')
  // .join('')

  const strFinal = [...strInitial].reverse()

  // console.log(strInitial)
  // console.log(strFinal)

  return strInitial.every((char, idx) => char === strFinal[idx])
}

console.log(isPalindrome('tenet')) // true
console.log(isPalindrome('home')) // false
console.log(isPalindrome('kayak')) // true
console.log(isPalindrome('Do geese see God')) // true
