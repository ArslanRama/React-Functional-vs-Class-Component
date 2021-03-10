import { Component } from "react";
/*
  class: combination of function and object structure
  class component rules:
  1- extend javascript class from react Component 
  2- we must render() and the return() the jsx
 */
class ClassComponent extends Component {
    // state to hold data
    state = {
        name: 'Aslan',
        age: 100,
        users: []
    }

   // Update Handler
    updateName = () => {
        /**
         * setState() is a default class component method/function for updating state data
         */
        this.setState({ name: 'Rama'})
    }

    // lifeCycle method 
    componentDidMount() {
        console.log('Data loaded from class...')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>I am a Class Component</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, index) => {
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
                <h2>I am  {this.state.age} years old and my name is {this.state.name}</h2>
                <button
                    type="button"
                    onClick={this.updateName}>Change the Name</button>
            </div>
        )
    }
}

// 3. export the class comp
export default ClassComponent;