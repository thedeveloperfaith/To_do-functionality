import React from 'react'
import { useState } from 'react'
import "./Todo.css"
import Button from "./Button"

const Todo = () => {
    const [value, setValue] =useState("")
    const [todos, setTodos] =useState([])
    const [mom , setMom] =useState(false)
    const [editBtn, setEditBtn] =useState(null)


    function addTodo(e){
        e.preventDefault()
        if (!value.trim()) return 

        if (editBtn !== null){
            const newTodos = todos.map((item, index) => {
                if (index === editBtn){
                    return value
                } else {
                    return item
                }
            }) 
             
            setTodos(newTodos)
            setEditBtn(null)
        } else {
            setMom(true)
            setTodos([...todos,value])
        } 
        setValue("")
    }

    function editTodo (index) {
        setValue(todos[index])
        setEditBtn(index)
    }

    function deleteTodo(index) {
        const newTodos = todos.filter((item, n) => n !== index)
        setTodos(newTodos)
    }




  return (
    <>
    <div className="container">
        <div className="content">
            <section className="parent">
                <div className="firstChild">
                    <input type="text" placeholder='Input your today"s task' value={value} 
                    className='add_task'
                    onChange={(e) =>setValue(e.target.value)}
                    />
                    <Button onClick={addTodo} text="+" className="add_btn"/>
                </div>
                <div className="list_container">
                    {
                        mom ? (
                            <ul>
                            { todos.map((item, index) => (
                                <li key ={index}>{item}
                                <Button onClick={ () => editTodo(index)}  text="edit"className="edit"/>
                                <Button onClick={ () => deleteTodo (index)}  text="del"className="delete"/>
                                </li>
                            ))}
                        </ul>
                        ) : <p>No Task yet</p>
                       
                    }
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default Todo
