function takeANumber(line, name){
  line.push(name)
  //pos = line.length
  return `Welcome ${name}. You are number ${line.length} in line.`
}

console.log(takeANumber([],"Terrance"))