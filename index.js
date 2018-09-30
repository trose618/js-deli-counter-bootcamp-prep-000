function takeANumber(line, name){
  line.push(name)
  pos = line.length
  return `Welcome ${name}. You are number ${pos} in line.`
}

console.log(takeANumber([],"Terrance"))