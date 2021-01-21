const creditosButton = document.querySelector('#container-creditos-button button');
const creditosDiv = document.querySelector('.container-creditos');
const creditos = document.querySelector('#creditos');

creditosDiv.style.top = 'calc(100vh - 1rem)'

creditosButton.addEventListener('click', () => {
  if (creditosDiv.style.top === 'calc(100vh - 1rem)') {
    creditosDiv.style.top = '2rem'
    creditosButton.style.bottom = 'calc(100vh - 2rem - 1.2rem)'
  } else {
    creditosDiv.style.top = 'calc(100vh - 1rem)';
    creditosButton.style.bottom = '0';
  };
});

creditosButton.addEventListener('mouseover', mouseOver);
creditosButton.addEventListener('mouseout', mouseOut);

function mouseOver() {
  creditosButton.style.backgroundColor = '#9a4ae6';
  creditos.style.backgroundColor = '#9a4ae6';

};

function mouseOut() {
  creditosButton.style.backgroundColor = 'blueviolet';
  creditos.style.backgroundColor = 'blueviolet';
};