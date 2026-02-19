const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let lastResult = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentValue = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
        lastResult = true;
      } catch {
        display.textContent = 'Erro';
        currentValue = '';
      }
      return;
    }

    if (lastResult && !isNaN(value)) {
      currentValue = value;
      lastResult = false;
    } else {
      currentValue += value;
    }

    display.textContent = currentValue;
  });
});
