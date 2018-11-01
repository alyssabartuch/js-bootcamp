'use strict'

const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
}

// initial rendering of list
renderTodos(todos, filters);


// listen for change on search text
document.querySelector('#search-text').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
})

// listen for form submit
document.querySelector('#todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const text = event.target.elements.todoText.value.trim();

  if (text) {
     todos.push({
      id: uuidv4(),
      text,
      completed: false
     })

     saveTodos(todos);
     renderTodos(todos, filters);
     event.target.elements.todoText.value = '';

  } else {
     console.log('Please provide some text');
  }


})


// listen for change on checkbox (hide completed)
document.querySelector('#hide-completed').addEventListener('change', (event) => {
  filters.hideCompleted = event.target.checked;
  renderTodos(todos, filters);
})
