const todo = [
  {
    text: 'Order cat food',
    completed: true,
  },
  {
    text: 'Clean kitchen',
    completed: false,
  },
  {
    text: 'Buy food',
    completed: true,
  },
  {
    text: 'Do chores',
    completed: false,
  },
  {
    text: 'Read a book',
    completed: false,
  },
];

const deleteTodo = function (todos, text) {
  let index = todos.findIndex(function (todo) {
    return todo.text.toUpperCase() === text.toUpperCase();
  });

  if (index !== -1) {
    todos.splice(index, 1);
  }
};

// Returns a list of all incomplete tasks
const getThingsTodo = function (todos) {
  return todos.filter(function (todo) {
    return todo.completed === false;
  });
};

// Sorts tasks, incomplete first
const sortTodo = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
    console.log(todos);
  });
};

console.log(sortTodo(todo));
