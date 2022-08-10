const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', done);
      checkbox.checked = done;
      checkbox.dataset.id = id;
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
  const inputElem = document.querySelector('.task-input');
  const inputValue = inputElem.value;

  if (inputValue === '') {
    return;
  }

  tasks.push({
    id: `${tasks.length + 1}`,
    text: inputValue,
    done: false,
  });

  inputElem.value = '';
  renderTasks(tasks);
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createNewTask);

// onToggleTask

const onToggleTask = e => {
  const isCheckBox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckBox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);
