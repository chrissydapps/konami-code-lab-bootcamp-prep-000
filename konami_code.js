const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
function konami(e) {
  const k = e.key
  if (k === codes[index]) {
    index++;
    if (index === code.length) {
      alert('Congratulations, you have found Narnia!');
      index = 0
    }
  } else {
    index = 0
  }
}

function b() {
  document.body.addEventListener('keydown', a)
}

function init() {
  // your code here
}
