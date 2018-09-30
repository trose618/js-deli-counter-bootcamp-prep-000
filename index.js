function takeANumber(line, name){
  line.push(name)
  //pos = line.length
  return `Welcome ${name}. You are number ${line.length} in line.`
}
var array = []
console.log(takeANumber(array,"Terrance"))
console.log(takeANumber(array,"Ilyasah"))