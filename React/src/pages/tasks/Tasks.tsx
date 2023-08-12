import { useEffect, useState } from 'react'
import axios from 'axios';

const Tasks = () => {

    const getUsers = () => {
        axios.get('http://localhost:4000/user/users').then((response: any) => {
            console.log('hi',response.data[0])
        }).catch((err) => {
            alert(''+err)
        })
    }

    const [todos, setTodos] = useState<any>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Fetch all todos from the server
    useEffect(() => {
        getUsers()
        axios.get('http://localhost:4000/todo/get-todo')
            .then((response) => {
                setTodos(response.data.todo)
            })
            .catch((error) => console.error('err',error));
    }, []);

    // Create a new todo
    const handleCreateTodo = (e: any) => {
        e.preventDefault()
        axios.post('http://localhost:4000/todo/add-todo', { title, description })
            .then((response: any) => {
                console.log('response' + JSON.stringify(response))
                setTodos([...todos, response.data.data]);
                setTitle('');
                setDescription('');
            })
            .catch((error) => console.error(error));
    };

        // Update a todo
        const handleUpdateTodo = (id: any) => {
            console.log('id',id)
            axios.put(`http://localhost:4000/todo/update-todo/${id}`,{title,description})
                .then((response) => {
                    const updatedTodo = response.data;
                    setTodos(todos.map((todo:any) => (todo._id === updatedTodo._id ? updatedTodo : todo)));
                    setTitle('');
                    setDescription('');
                })
                .catch((error) => console.error(error));
        };

    // Delete a todo
    const handleDeleteTodo = (id: any) => {
        console.log('id',id)
        axios.delete(`http://localhost:4000/todo/delete-todo/${id}`)
            .then(() => {
                setTodos(todos.filter((todo: any) => todo._id !== id));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleCreateTodo}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos?.map((todo: any) => (
                    <li key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button onClick={() => handleUpdateTodo(todo._id)}>update</button>
                        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks
