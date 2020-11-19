const mySelection   = document.getElementById('my-selection-listing'),
      compSelection = document.getElementById('comp-selection-listing'),
      winner        = document.getElementById('winner-listing');

const play = function() {
  const myResponse = prompt('Rock[1], Paper[2], Scissors[3]');
  const compResponse = computerSelectionGenerator();

  mySelection.innerHTML = myResponse;
  compSelection.innerHTML = compResponse;
}

const computerSelectionGenerator = function() {
  return Math.floor(Math.random() *  3) + 1;
}

// const translator = function(input) {
//   input = parseInt(input)
// }