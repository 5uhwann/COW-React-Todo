import './App.css';
import AddButton from './component/ui/AddButton';
import TodoListItem from './component/todoList/TodoListItem';
import TodoList from './component/todoList/TodoList';

const data = [
  {
    "id": 1,
    "content": "test1",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 2,
    "content": "test2",
    "isCompleted": true,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  }
]


function App() {
  return (
    <TodoList
      todoLists={data}
      onClockItem={(event) => {
      }}
    />
  );
}



export default App;
