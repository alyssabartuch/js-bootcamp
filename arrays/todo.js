const todos = [{
  text: 'laundry',
  completed: true
}, {
  text: 'dishes',
  completed: false
}, {
  text: 'cat litter',
  completed: true
}, {
  text: 'clean out car',
  completed: false
}, {
  text: 'empty trash',
  completed: true
}];

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }

  })
}


//convert array of string to array of objects -> text: string; completed: boolean DONE
//create a function to remove a todo by text value
const removeTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo, index) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  })
  if (index > -1) {
    todos.splice(index, 1);
  }

}

const getThingsTodo = function(todos) {
  return todos.filter(function(todo, index) {
    return !todo.completed;

  })

}

sortTodos(todos);
console.log(todos);

//console.log(getThingsTodo(todos));


// removeTodo(todos, 'cat litter');
// console.log(todos);
