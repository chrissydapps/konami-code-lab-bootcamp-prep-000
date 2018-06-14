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
function a(e) {
  const k = e.key
  if (k === codes[index])
  alert('Congratulations, you have found Narnia!')
}

function b() {
  document.body.addEventListener('keydown', a)
}



function init() {
  // your code here
}
