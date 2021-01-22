const creditosButton = document.querySelector('#container-creditos-button button');
const creditosDiv = document.querySelector('.container-creditos');
const creditos = document.querySelector('#creditos');

creditosDiv.style.top = 'calc(100vh - 1rem)';
creditosButton.style.top = 'calc(100vh - 2rem)';

creditosButton.addEventListener('click', () => {
  if (creditosDiv.style.top === 'calc(100vh - 1rem)') {
    creditosDiv.style.top = '2rem'
    creditosButton.style.top = '1rem';
  } else {
    creditosDiv.style.top = 'calc(100vh - 1rem)';
    creditosButton.style.top = 'calc(100vh - 2rem)';
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