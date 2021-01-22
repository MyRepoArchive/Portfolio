const personalInfoUl = document.querySelector('#personal-info ul');
const keepRightTopics = document.querySelectorAll('.desktop-keep-right');
const rightArea = document.querySelector('#right-area');
const aside = document.querySelector('aside');

window.onresize = () => {
  if (window.innerWidth >= 700) {
    keepRightTopics.forEach((topic) => {
      const displaiedTopic = topic;
      topic.style.display = 'none';
      displaiedTopic.style.display = 'block';
      displaiedTopic.querySelector('h2').style.marginBottom = '0.5rem';
      rightArea.appendChild(displaiedTopic);

    });
    if (window.innerHeight < 600) {
      aside.style.position = 'initial';
    } else {
      aside.style.position = 'fixed';
    }
  } else {
    keepRightTopics.forEach((topic) => {
      const displaiedTopic = topic;
      topic.style.display = 'none';
      displaiedTopic.style.display = 'block';
      personalInfoUl.appendChild(displaiedTopic)
    });
    aside.style.position = 'initial';
  };
};

window.onresize();