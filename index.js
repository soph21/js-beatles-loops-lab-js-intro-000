function theBeatlesPlay (musicians, instruments) {
  let array =[]
for (let a = 0; a < musicians.length; a++) {
array.push(`${musicians[a]} plays ${instruments[a]}`)
}
return array
}

function johnLennonFacts (facts) {
let array =[],
  n = 0
while (n < facts.length) {
  array.push(`${facts[n]}!!!`)
  n++
}
return array
}

function iLoveTheBeatles (num) {
let array =[], n = 0
function increment() {
  n++
}
do {
  array.push ("I love the Beatles!")
} while (num < 15)
}
