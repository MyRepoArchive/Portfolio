const expTexts = document.querySelectorAll('#experience-list p');
const expH3s = document.querySelectorAll('#experience-list h3');

expTexts.forEach((expText) => {
  expText.style.display = 'none';
});

expH3s.forEach((expH3) => {
  expH3.addEventListener('click', () => {
    const seta = expH3.querySelector('img');
    const text = expH3.parentElement.querySelector('p');

    if (text.style.display === 'none') {
      seta.style.transform = 'rotate(90deg)';
      text.style.display = 'block';
    } else {
      seta.style.transform = 'rotate(0deg)';
      text.style.display = 'none';
    }
  });
});