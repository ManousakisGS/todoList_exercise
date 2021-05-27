import React, {Component, useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodos} from '../../store/todoSlice';
import {nanoid} from '@reduxjs/toolkit';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const submit = () => {
        
        if (text.length>0) {
        const items = text.split(',');
        dispatch(
            addTodos(
                items.map((item) => ({ id: nanoid(), text: item, completed: false }))
            )
        );        
        };
        document.getElementById('clear-text').value="";
        setText('');
    };

    return (
        <div className='add-todo'>
            <div >
            <p> To add multiple activities write them comma separated</p>
            <p id='text-explain'>
                <i>eg: reading, eating, coding, hiking</i>
            </p>
            </div>
            <input id="clear-text" placeholder="Type here:" onfocus="this.placeholder = ''" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={submit}>Add activity</button>
        </div>
    );
};

export default AddTodo;
