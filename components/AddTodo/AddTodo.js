import React, {Component, useState, useEffect} from 'react';
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



        const fetchData = () => {
            // fetch data from URL
            
        /* fetch(`http://www.json-generator.com/api/json/get/ckKUlHqBiW?indent=2`)  */

        //fetch data from JSON file in public folder.

        fetch('data.json') 
        .then((res) => res.json())
        .then((data) => {
        let html='';
        for (let i = 0; i < data.entities.length; i++) {
             html+=data.entities[i]["text"];
             if ((i+1)<data.entities.length) html+=',';
          }
        document.getElementById('clear-text').value=html;
        setText(html);
        });
        }


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
            <button id="fetch" onClick={fetchData}>Fetch data</button>
        </div>
    );
};

export default AddTodo;
