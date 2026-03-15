import React from 'react'
import { useState } from 'react'
import "./Todo.css"
import Button from "./Button"

const Todo = () => {
    const [value, setValue] =useState("")
    const [todos, setTodos] =useState([])
    const [mom , setMom] =useState(false)


    function addTodo(e){
        e.preventDefault()
        if (!value.trim()) return setMom(true)
        setTodos([...todos,value])

        setValue("")
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
                            { todos.map((item) => (
                                <li>{item}</li>

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
