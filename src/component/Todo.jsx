import axios from "axios";
import { useEffect, useState } from "react";
import hello from "../../public/todo.jpeg";
import done from "../../public/false.png";



const Todo = () => {
   const [todos, setTodos] = useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response);
            setTodos(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    })




    return (
        <div>
            <h1> TODO LIST API</h1>
            <div className="container d">
            <div className="row">
               {todos.map((todo) => (
                <div className="card m-2 bg-light" style={{width:"18rem;"}} key={todo.id}>
                <div className="card-body">
                  <h5 className="card-title">User ID : {todo.userId}</h5>
                  <p className="card-text">{todo.title} </p>
                  <p className="">
                    { todo.completed 
                    ? <img src={hello} style={{ width: 200}}/>
                    : <img src={done} style={{ width: 100}}/>}
                  </p>
                </div>
              </div>
               ))}
            </div>
        </div>
        </div>
    );
}

export default Todo;
