const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getSavedTodos = function () {
  let todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  }

  return [];
};

const createTodoDOM = function (todo) {
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  if (todo.isCompleted) {
    checkbox.checked = true;
  }
  // Checking the checkbox alters the isComplete property for a task
  checkbox.addEventListener('change', function () {
    todo.isCompleted = checkbox.checked;
    saveTodos(todos);
    renderTodos(todos);
  });

  let taskName = document.createElement('span');
  taskName.textContent = todo.name;

  let removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  removeButton.addEventListener('click', () => {
    let deleteIndex = todos.findIndex((task) => todo.id === task.id);

    todos.splice(deleteIndex, 1);
    saveTodos(todos);
    renderTodos(todos);
  });

  let taskContainingDiv = document.createElement('div');
  taskContainingDiv.appendChild(checkbox);
  taskContainingDiv.appendChild(taskName);
  taskContainingDiv.appendChild(removeButton);

  return taskContainingDiv;
};

const renderTodos = (todos) => {
  let filteredTodos = todos.filter((todo) => {
    let nameSearch = todo.name
      .toLowerCase()
      .includes(filter.nameFilter.toLowerCase());

    let completeSearch = !hideCompleteCheckbox.checked || !todo.isCompleted;

    return nameSearch && completeSearch;
  });

  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);

  todoSection.innerHTML = '';
  let header = document.createElement('h3');
  header.textContent = `You have ${incompleteTodos.length} todos left`;
  todoSection.appendChild(header);

  // for each task, generate checkbox, task nome and remove button
  filteredTodos.forEach((todo) => {
    let taskContainingDiv = createTodoDOM(todo);
    todoSection.appendChild(taskContainingDiv);
  });
};
