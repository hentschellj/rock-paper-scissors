const mySelection   = document.getElementById('my-selection-listing'),
      compSelection = document.getElementById('comp-selection-listing'),
      winner        = document.getElementById('winner-listing');

const play = function() {
  const myResponse = prompt('Rock[1], Paper[2], Scissors[3]');
  const compResponse = computerSelectionGenerator();

  mySelection.innerHTML = translator(myResponse);
  compSelection.innerHTML = translator(compResponse);
}

const computerSelectionGenerator = function() {
  return Math.floor(Math.random() *  3) + 1;
}

const translator = function(input) {
  input = parseInt(input);
  if (input === 1) {
    return 'Rock';
  } else if (input === 2) {
    return 'Paper';
  } else if (input === 3) {
    return 'Scissors';
  } else {
    return 'Could not understand response';
  }
}