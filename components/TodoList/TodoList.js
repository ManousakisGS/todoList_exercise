import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {clearTodos, todoAdapter, todoSelectors, restoreTodo} from '../../store/todoSlice';
import Todo from './Todo';

const TodoList = () => {
    const dispatch=useDispatch();
    const allTodos = useSelector(todoSelectors.selectEntities)
    const todoCount= useSelector(todoSelectors.selectTotal);
    const deletedTodos= useSelector(state => state.todos.deletedTodos);

    const todoList=[];
    for (const id in allTodos) {
        if (Object.hasOwnProperty.call(allTodos,id)) {
            const todoItem = allTodos[id];
            todoList.push(
                <Todo
                    key={todoItem.id}
                    id={todoItem.id}
                    completed={todoItem.completed}
                    text={todoItem.text}
                />
            );
        }
    }

    const restore = (restoreitem) => {
        dispatch(restoreTodo(restoreitem));
    };

    const deleteList = deletedTodos.map(item => (<div> 
        <span> {item.text}</span>
        <button onClick={() => restore(item)}>Restore</button>
    </div>
    ));
    return (
        <div className='todo-list'>
            <h3>Your ToDos:</h3>
            <h4>Count: {todoCount}</h4>
            <button className='delete-btn' onClick={() => {
                dispatch(clearTodos());}} >
                Clear All ToDos
            </button>
            <div> {todoList}</div>
            <h3>Deleted todos:</h3>
            <div>{deleteList}</div>
        </div>
    )
}

export default TodoList;