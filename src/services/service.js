import axios from 'axios';


export const getAllTodo = async () => {
    const todoDetail = await axios.get(
      `${process.env.REACT_APP_API_KEY}/d0fb9deb6abb413ca84f9f57e0b25f96/offsureItTest`,
      {
        method: 'GET',
      }
    );
    return todoDetail;
  };
  

  export const createTodo = async (todoData) => {
    const token = localStorage.getItem('token');
    const createTodoItem = await axios({
      method: 'POST',
      url:`${process.env.REACT_APP_API_KEY}/d0fb9deb6abb413ca84f9f57e0b25f96/offsureItTest`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: todoData,
    });
    return createTodoItem;
};

export const getTodoItemById = async (todoId) => {
    const token = localStorage.getItem('token');
    const todoItem = await axios.get(
      `${process.env.REACT_APP_API_KEY}/d0fb9deb6abb413ca84f9f57e0b25f96/offsureItTest/${todoId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return todoItem;
  };


  export const UpdateTodo = async (todoData,todoId) => {
    const token = localStorage.getItem('token');
    const updateTodoItem = await axios({
      method: 'PUT',
      url:`${process.env.REACT_APP_API_KEY}/d0fb9deb6abb413ca84f9f57e0b25f96/offsureItTest/${todoId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: todoData,
    });
    return updateTodoItem;
};

export const deleteTodo = async (todoId) => {
    const token = localStorage.getItem('token');
  
    const deleteTodoItem = await axios({
      method: 'DELETE',
      url:`${process.env.REACT_APP_API_KEY}/d0fb9deb6abb413ca84f9f57e0b25f96/offsureItTest/${todoId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return deleteTodoItem;
  };
  