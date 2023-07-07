import fs from 'fs'



let array = [] 
// fs.readFile("perks.txt", function(error, data) {
//   if (error) { throw error }
//   data.toString().split("\n").forEach(function(line, index, arr) {
//     array = [...array, line]
//   })

//   fs.writeFileSync('output/data.json', JSON.stringify(array))
// })

// fs.readFile("perks.txt", function(error, data) {
//   data.toString().split('\n').forEach(function(line, index, arr) {
//     array = [...array, line.toString().slice(0, -1)]
//   })
//   console.log(array);
//   fs.writeFileSync('output/perks.json', JSON.stringify(array))
// })

fs.readFile("redflags.txt", function(error, data) {
  data.toString().split('\n').forEach(function(line, index, arr) {
    array = [...array, line.toString().slice(0, -1)]
  })
  console.log(array);
  fs.writeFileSync('output/redflags.js', JSON.stringify(array))
})



