import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../slices/todoSlice';
import SingleTodo from './SingleTodo';

const Todo = () => {
    const [todoText, setTodoText] = useState('');
    const todos = useSelector((state) => state.todos);
    ;
    const dispatch = useDispatch();
    return (
        <section className='todos-wrapper'>
            <div className='todo-input-wrapper'>
                <input onChange={(e) => setTodoText(e.target.value)} placeholder='Enter Todo' type="text">
                </input>
                <button disabled={todoText ? false : true} onClick={() => dispatch(addTodo(todoText))}>Add Todo</button>
            </div>
            <div className="todos-list">
                {todos.length > 0 ? todos.map((todo, index) => {
                    return <SingleTodo key={index} todo={todo}></SingleTodo>
                }) : <p>No Added Todo Please Add Some Todos</p>}
            </div>
        </section>
    )
}

export default Todo