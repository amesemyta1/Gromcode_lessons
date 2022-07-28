const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

export const renderRepos = reposList => {
  const reposListElems = reposList.map(({ name }) => {
    const listElems = document.createElement('li');
    listElems.classList.add('repo-list__item');
    listElems.textContent = name;

    return listElems;
  });

  listElem.innerHTML = '';
  listElem.append(...reposListElems);
};
