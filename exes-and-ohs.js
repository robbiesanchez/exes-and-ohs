function XO(string) {
  let countx = 0;
  let counto = 0;
  for (let i = 0; i < string.length; i++) {
  let strings = string[i];
  switch(strings) { 
    case "x":
      countx++;
      break;
    case "X":
      countx++;
      break;
    case "o":
      counto++;
      break;
    case "O":
      counto++;
      break;
  }
    
} if (countx == counto) {
    console.log("true"
)  } else {
    console.log("false")
  }
}

  
  XO("OOxX");
      