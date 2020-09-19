function iterativeLog(array) {
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  })
  }

  function callback(arr) {
    return arr
  }

  function iterate(callback) {
    var letters = ['a', 'b', 'c']
    letters.forEach(callback)
    return letters
  }
