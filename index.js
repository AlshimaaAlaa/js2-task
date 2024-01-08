// Task
// __
// 1. Take an input from user as exam score.
// 2. If the score is less than 100 and greater than or equal 85, then print You got a A 🎉.
// 3. If the score is less than 85 and greater than or equal 75, then print You got a B 🎉.
// 4. If the score is less than 75 and greater than or equal 65, then print You got a C 🧾.
// 5. If the score is less than 65 and greater than or equal 50, then print You got a D 👌.
// 6. If the score is less than 50 and greater than or equal 0, then print You got a F 😟.
// 7. If the score is greater than 100 or less than 0, then print Invalid Score ❌.
// 9. If the score is not a number, then print Not a Number ❌.
// 8. If the score is equal 100, then print Perfect Score 🏆.

let examScore = prompt('Enter your score!')

if(examScore < 100 && examScore >= 85){
  document.write('You got a A 🎉')
}else if(examScore < 85 && examScore >= 75){
  document.write('You got a B 🎉')
}else if(examScore < 75 && examScore >= 65){
  document.write('You got a C')
}else if(examScore < 65 && examScore >= 50){
  document.write('You got a D 👌')
}else if(examScore < 50 && examScore == 0){
  document.write('got a F 😟')
}else if(examScore > 100 && examScore < 0){
  document.write('Invalid Score ❌')
}else if(examScore == 100){
  document.write('Perfect Score 🏆')
}else if(isNaN(examScore)){
  document.write('Not a Number ❌')
}

// Do it with if statement and switch statement.

switch(true){
  case examScore < 100 && examScore >= 85:
    document.write('You got a A 🎉')
    break
  case examScore < 85 && examScore >= 75:
    document.write('You got a B 🎉')
    break
  case examScore < 75 && examScore >= 65:
    document.write('You got a C')
    break
  case examScore < 65 && examScore >= 50:
    document.write('You got a D 👌')
    break
  case examScore < 50 && examScore == 0:
    document.write('got a F 😟')
    break
  case examScore > 100 && examScore < 0:
    document.write('Invalid Score ❌')
    break
  case examScore == 100:
    document.write('Perfect Score 🏆')
    break
  case isNaN(examScore):
    document.write('Not a Number ❌')
}


let personal = {
  name: 'shimaa',
  age: 22,
  city: 'Ras ElBar'
}
let keys = Object.keys(personal);
for (let i = 0; i < keys.length; i++) {
  values = personal[keys[i]]
  console.log(values);
}