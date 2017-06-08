
var todoInput = document.querySelector(".new-todo");

var todoList = document.querySelector('.todo-list');

todoInput.addEventListener('keypress', function addListItem(event) {
  if (event.keyCode == 13) {
    var todoContent = event.target.value;
    var newTodoLi = document.createElement('li');
    newTodoLi.innerHTML = '<div class="view"><label>'+ todoContent +'</label></div>';
    todoList.appendChild(newTodoLi);
    event.target.value = "";

  }

  console.log(event);
});
