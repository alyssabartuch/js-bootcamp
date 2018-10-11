const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
}

// initial rendering of list
renderTodos(todos, filters);


// listen for change on search text
document.querySelector('#search-text').addEventListener('input', function(event) {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
})

document.querySelector('#todo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = event.target.elements.todoText.value;


  todos.push({
    id: uuidv4(),
    text: todoText,
    completed: false
  })

  saveTodos(todos);
  console.log(localStorage.getItem('text'));

  renderTodos(todos, filters);

  event.target.elements.todoText.value = '';
})


// listen for change on checkbox (hide completed)
document.querySelector('#hide-completed').addEventListener('change', function(event) {
  filters.hideCompleted = event.target.checked;
  renderTodos(todos, filters);


})
