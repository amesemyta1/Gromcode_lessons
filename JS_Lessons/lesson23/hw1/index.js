const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

// renderTasks

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = index;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// createNewTask

const createNewTask = () => {
  const taskInputField = document.querySelector('.task-input');
  const inputFieldValue = taskInputField.value;
  if (inputFieldValue === '') {
    return;
  }
  const newTask = {
    text: inputFieldValue,
    done: false,
  };
  tasks.push(newTask);
  taskInputField.value = '';
  taskInputField.innerHTML = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const createTaskBtnElem = document.querySelector('.create-task-btn');

createTaskBtnElem.addEventListener('click', createNewTask);

// changeStatus

const changeStatus = event => {
  const idNum = +event.target.dataset.id;
  console.log(idNum);
  if (tasks[idNum].done) {
    tasks[idNum].done = false;
  } else {
    tasks[idNum].done = true;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const checkboxElem = document.querySelectorAll('.list__item-checkbox');

checkboxElem.forEach(elem => elem.addEventListener('change', changeStatus));
