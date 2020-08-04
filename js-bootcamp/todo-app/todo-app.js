let todos = getSavedTodos();

const filter = {
  nameFilter: '',
  completeFilter: '',
};

// DOM elements
const newTodoForm = document.querySelector('#new-todo-form');
const todoSection = document.querySelector('#todo-section');
const hideCompleteCheckbox = document.querySelector('#hide-complete-checkbox');
const filterField = document.querySelector('#filter-text');

renderTodos(todos);

// Events
// Adding a new task
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let newTask = {
    id: uuidv4(),
    name: e.target.elements.newTodoField.value,
    isCompleted: false,
  };

  todos.push(newTask);
  saveTodos(todos);
  e.target.elements.newTodoField.value = '';
  renderTodos(todos);
});

// Hide completed todos
hideCompleteCheckbox.addEventListener('change', () => {
  filter.completeFilter = hideCompleteCheckbox.checked;
  renderTodos(todos);
});

// Filter by task name
filterField.addEventListener('input', () => {
  filter.nameFilter = filterField.value;
  renderTodos(todos);
});
