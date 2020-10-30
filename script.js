let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  let clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else if (clickedButtonValue === 'CE') {
    // clear the last value on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
