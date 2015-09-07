'use strict';

// create wrapper component for TodoApp
var TodoApp = React.createClass({
    displayName: 'TodoApp',

    // set inital values for todos list
    getInitialState: function getInitialState() {
        return this.state = {
            todos: ['todo 1', 'todo 2', 'todo 3', 'todo 4',  'todo 5']
        };
    },
    render: function render() {
        //pass todos data from TodoApp state to TodosList props
        return React.createElement(
            'section',
            null,
            React.createElement(
                'h3',
                null,
                'Todos'
            ),
            React.createElement(TodosList, { todos: this.state.todos })
        );
    }

});

// create list component for Todos
var TodosList = React.createClass({
    displayName: 'TodosList',

    // move todos from props to state
    getInitialState: function getInitialState() {
        return this.state = {
            todos: this.props.todos
        };
    },
    addTodo: function addTodo(todo) {
        var newList = this.state.todos.concat(todo);
        this.setState({
            todos: newList
        });
    },
    removeTodo: function removeTodo(index) {
        var newList = this.state.todos;
        newList.splice(index, 1);
        this.setState({
            todos: newList
        });
    },
    render: function render() {

        // render todos array into Todo components
        var self = this;
        var todos = this.state.todos.map(function compileTodo(v, i) {
            return React.createElement(Todo, { index: i, key: i, label: v, removeTodo: self.removeTodo });
        });
        return React.createElement(
            'section',
            null,
            React.createElement(
                'ul',
                { className: 'todos' },
                todos
            ),
            React.createElement(AddTodo, { addTodo: this.addTodo })
        );
    }
});

// create component form for adding todos
var AddTodo = React.createClass({
    displayName: 'AddTodo',

    // set initial textvalue of input field
    getInitialState: function getInitialState() {
        return this.state = {
            newValue: ""
        };
    },
    handleSubmit: function handleSubmit(event) {
        event.preventDefault();

        // prevent empty todos or default value
        if (this.state.newValue === "" || this.state.value === "add Todo") return;

        // push new todo to todos
        this.props.addTodo(this.state.newValue);

        // reset input field values
        this.setState({
            newValue: ""
        });
    },
    handleChange: function handleChange(event) {
        this.setState({
            value: event.target.value,
            newValue: event.target.value
        });
    },
    render: function render() {
        return React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement('input', { placeholder: 'add Todo', value: this.state.newValue, onChange: this.handleChange, type: 'text' }),
            React.createElement('input', { type: 'submit', value: 'submit' })
        );
    }
});

// create todo for todos list
var Todo = React.createClass({
    displayName: 'Todo',

    handleClick: function handleClick() {
        console.log();
        this.props.removeTodo(this.props.index);
    },
    render: function render() {

        // render todo with label and index
        return React.createElement(
            'li',
            { className: 'todos-todo', onClick: this.handleClick },
            this.props.label
        );
    }
});

// Render entire TodoApp and append HTML to App#div
React.render(React.createElement(TodoApp, null), document.getElementById('App'));
