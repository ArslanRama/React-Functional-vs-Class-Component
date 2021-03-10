// Import react hook
import { useState, useEffect } from "react";
/**
 * func component rules:
 * 1. must return a jsx 
 */
export default function FuncComponent() {
    // state must have a type e.g const, let
    const initialData = {
        name: 'Aslan',
        age: 200,

    }
    // const [stateName, functionToUpdateState] = useState(initial data)
    const [state, setState] = useState(initialData)
    const [users, setUsers] = useState([
        
    ]);

    // Update Handler
    const updateName = () => {
        // use hook to update data
        setState({ ...state, age: 35 })
    }

    // lifeCycle Method
    useEffect(() => {
        console.log('Data loaded from functional...')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    })


    return (
        <div>
            <h1>I am a Functional Component</h1>
            <table>
                <thead>
                    <tr className="title">
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <h2>I am  {state.age} years old and my name is {state.name}</h2>
            <button
                type="button"
                onClick={updateName}>Change the age
          </button>
        </div>
    )
}
