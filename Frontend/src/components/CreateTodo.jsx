export function CreateTodo() {
    return <div>
        <input style={{
            padding: '10px',
            margin: '10px'
        }}type="text" placeholder="title"></input> <br/>
        <input style={{
            padding: '10px',
            margin: '10px'
        }}type="text" placeholder="description"></input> <br/>
        <button style={{
            padding: '10px',
            margin: '10px'
        }}>Add a todo</button>
    </div>
}

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}