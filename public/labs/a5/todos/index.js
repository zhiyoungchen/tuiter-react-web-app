$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
   </div>
`);

import TodoList from "./TodoList.js";

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);

import TodoItem from "./TodoItem.js";
const TodoList = () => {
  return(`
       <ul>
           ${TodoItem('Buy milk')}
           ${TodoItem('Pickup the kids')}
           ${TodoItem('Walk the dog')}
       </ul>
   `);
}
export default TodoList;