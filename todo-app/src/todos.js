import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = [];

// fetch existing todos from local storage
const loadTodos = () => {
   const todosJSON = localStorage.getItem('todos');

   try {
      todos = todosJSON ? JSON.parse(todosJSON) : [];
   } catch (e) {
      return [];
   }
};

// save todos to local storage
const saveTodos = () => {
   localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodos = () => todos;

const createTodo = (text) => {
   todos.push({
      id: uuidv4(),
      text,
      completed: false
   });
   saveTodos(todos);
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
   const todoIndex = todos.findIndex((todo) => todo.id === id);

   if (todoIndex > -1) {
      todos.splice(todoIndex, 1);
   }
   saveTodos();
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
   const todo = todos.find((todo) => todo.id === id);

   if (todo) {
      todo.completed = !todo.completed;
   }
   saveTodos();
}


// Make sure to call loadTodos and setup the exports
loadTodos();

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo };
