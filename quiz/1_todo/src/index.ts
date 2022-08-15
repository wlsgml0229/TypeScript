/* eslint-disable prettier/prettier */
let todoItems: object[];
//any 타입은 형식을 확인할 수 없는 경우 
// any 대신 구체적인 타입인 Array 적용

// api
function fetchTodoItems(): object[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<object> {
  const todos = fetchTodoItems();
  return todos;
}

//함수 반환값 없는경우 void 
function addTodo(todo: object): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: object): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): Array<object> {
  return todoItems.filter((item: { done: boolean }) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id:4,
    title: '아이템 4',
    done: false
  }
  addTodo(item1);
  addTodo({
    id:5,
    title: '아이템 5',
    done: false
  })
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
