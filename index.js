function takeANumber(line, name){
  line.push(name)
  return `Welcome ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  return line.shift()
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }
  let theLine = "The line is currently: "
  for(let i = 0; i < line.length;i++){
    theLine = theLine + ""
  }
}

