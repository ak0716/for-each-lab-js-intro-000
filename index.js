
const array2 = [1, 2, 3]

function iterativeLog(array) {
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  })
  }

  function iterate(callback) {
    const array2 = ['a', 'b', 'c']
    array2.forEach((element, index, callback) => {
      console.log(`${callback}`)
    })
  }
