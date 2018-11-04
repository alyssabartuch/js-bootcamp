import uuidv4 from 'uuid/v4';

// Setup the empty todos array
const todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
   const todosJSON = localStorage.getItem('todos');

   try {
      return todosJSON ? JSON.parse(todosJSON) : [];
   } catch (e) {
      return [];
   }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = (todos) => {
   localStorage.setItem('todos', JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;


// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (todoText) => {
   const todoId = uuidv4();

   todos.push({
      id: todoId,
      text: todoText,
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
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
   const todo = todos.find((todo) => todo.id === id);

   if (todo) {
      todo.completed = !todo.completed;
   }
}


// Make sure to call loadTodos and setup the exports
loadTodos();

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo };
