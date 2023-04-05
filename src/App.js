import {  useQuery } from 'react-query';
import {getAllTodo} from "./services/service.js"
import './App.css';
import TodoList from './TodoList.js';

function App() {
  // const { isLoading, data, isSuccess } = useQuery(
  //   ['todo-list'],
  //   () => getAllTodo(),
  //   {
  //     cacheTime: 0,
  //     keepPreviousData: true,
  //     staleTime: Infinity,
  //   }
  // );
  // console.log(isLoading,data,isSuccess)

  return (
    <div className="App">
<TodoList/>
    </div>
  );
}

export default App;
