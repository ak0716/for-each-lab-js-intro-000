function iterativeLog(array) {
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  })
  }

  function iterate(callback) {
    const letters = ['a', 'b', 'c']
    callback.forEach((element, index, array) => {
      console.log(`${array}`)
    })
  }
