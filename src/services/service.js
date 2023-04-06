import axios from 'axios';

export const getAllTodo = async () => {
    const todoDetail = await axios.get(
      `${process.env.REACT_APP_API_KEY}/offSureItTest`,
      {
        method: 'GET',
      }
    );
    return todoDetail;
  };
  

  export const createTodo = async (todoData) => {
    const createTodoItem = await axios({
      method: 'POST',
      url:`${process.env.REACT_APP_API_KEY}/offSureItTest`,
      data: todoData,
    });
    return createTodoItem;
};

export const getTodoItemById = async (todoId) => {
    const todoItem = await axios.get(
      `${process.env.REACT_APP_API_KEY}/offSureItTest/${todoId}`,
      {
        method: 'GET',
      }
    );
    return todoItem;
  };


  export const UpdateTodo = async (taskDetail) => {
    const updateTodoItem = await axios({
      method: 'PUT',
      url:`${process.env.REACT_APP_API_KEY}/offSureItTest/${taskDetail.todoId}`,
      data: taskDetail.data,
    });
    return updateTodoItem;
};

export const deleteTodo = async (todoId) => { 
    const deleteTodoItem = await axios({
      method: 'DELETE',
      url:`${process.env.REACT_APP_API_KEY}/offsureItTest/${todoId}`,
   
    });
    return deleteTodoItem;
  };
  