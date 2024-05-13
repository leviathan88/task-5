// function 1 ------------------------------------------
let average = (arr) => {
  let result = 0
  let abc = arr.length  // length of array

  for (let i = 0; i < abc; i++) {
    result += arr[i]  // sum of array elements
  }

  console.log(result / abc);
}

// function 2 ---------------------------------------
let reverse = (str) => {
  let result = ''
  let abc = str.length  // length of string

  for (let i = abc - 1; i >= 0; i--) {
    result += str[i];
  }

  console.log(result);
}

// function 3 ------------------------------
let factorial = (num) => {
  let result = 1

  for (let i = 1; i < num; i++) {
    result *= i
  }

  console.log(result);
}

// function 4 ----------------------------------------------------
let longest = (arr) => {
  let result = ''
  let abc = arr.length  // length of array

  for (let i = 0; i < abc; i++) {
    let element = arr[i]  // elements of array
    let length = element.length  // length of elements
    if (length > result.length) {
      result = element
    }
  }

  console.log(result);
}

// function 5 ----------------------------------
const sum = (num) => {
  let str = num.toString()
  let result = 0
  
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i])
  }

  console.log(result);
}

average([8, 19, 6])
reverse('lorem')
factorial(6)
longest(['name', 'horizon' ,'lorem'])
sum(5869)
