const play = function() {
  const myResponse = prompt('Rock[1], Paper[2], Scissors[3]');
  const compResponse = computerSelectionGenerator();
  
  const mySelection = document.getElementById('my-selection-listing');
  const compSelection = document.getElementById('comp-selection-listing');
  const winner = document.getElementById('winner-listing');

  mySelection.innerHTML = myResponse;
  compSelection.innerHTML = compResponse;
}

const computerSelectionGenerator = function() {
  return Math.floor(Math.random() *  3) + 1;
}