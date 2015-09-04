'use strict';

// create wrapper component for TodoApp
let TodoApp = React.createClass({
    // set inital values for todos list
    getInitialState() {
        return this.state = {
            todos: [
                'todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5'
            ]
        }
    },
    render() {
        //pass todos data from TodoApp state to TodosList props
        return (
            <section>
                <h3>Todos</h3>
                <TodosList todos={this.state.todos}/>
            </section>
        )
    }

})

// create list component for Todos
let TodosList = React.createClass({

    // move todos from props to state
    getInitialState() {
        return this.state = {
            todos: this.props.todos
        }
    },
    addTodo(todo) {
        let newList = this.state.todos.concat(todo)
        this.setState({
            todos: newList
        })
    },
    removeTodo(index) {
        let newList = this.state.todos
        newList.splice(index, 1)
        this.setState({
            todos: newList
        })
    },
    render() {

        // render todos array into Todo components
        let self = this
        let todos = this.state.todos.map(function compileTodo(v, i) {
            return <Todo index={i} key={i} label={v} removeTodo={self.removeTodo}/>
        })
        return (
            <section>
                <ul className="todos">{todos}</ul>
                <AddTodo addTodo={this.addTodo} />
            </section>
        )
    }
})

// create component form for adding todos
let AddTodo = React.createClass({

    // set initial textvalue of input field
    getInitialState() {
        return this.state = {
            newValue: "",
        }
    },
    handleSubmit(event) {
        event.preventDefault()

        // prevent empty todos or default value
        if(this.state.newValue === "" || this.state.value === "add Todo") return

        // push new todo to todos
        this.props.addTodo(this.state.newValue)

        // reset input field values
        this.setState({
            newValue: ""
        })
    },
    handleChange(event) {
        this.setState({
            value: event.target.value,
            newValue: event.target.value
        })
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="add Todo" value={this.state.newValue} onChange={this.handleChange} type="text"/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
})

// create todo for todos list
let Todo = React.createClass({
    handleClick(){
        console.log()
        this.props.removeTodo(this.props.index)
    },
    render() {

        // render todo with label and index
        return <li className="todos-todo" onClick={this.handleClick}>{this.props.label}</li>
    }
})

// Render entire TodoApp and append HTML to App#div
React.render(<TodoApp/>, document.getElementById('App'))
