import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../slices/todoSlice';

const SingleTodo = ({ todo }) => {
    console.log("Todo Prop--", todo);
    const dispatch = useDispatch();
    const { todoText, isCompleted, id } = todo;
    return (
        <div className='single-todo-wrapper'>
            <input checked={isCompleted} type='checkbox' onChange={(e) => {
                console.log("Target---------", e.target.value);
                dispatch(editTodo(id));
            }}></input>
            <p style={{ textDecoration: isCompleted ? 'wavy line-through' : 'none' }}>{todoText}</p>
            <span style={{ cursor: 'pointer' }} onClick={() => dispatch(removeTodo(id))}>Remove</span>
        </div>
    )
}

export default SingleTodo