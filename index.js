function takeANumber(line, name){
  line.push(name)
  pos = line.length
  return `Welcome ${name}. You are number ${line.}`
}