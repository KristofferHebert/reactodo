'use strict'

let TodoApp = React.createClass({
  // set inital values for todos list
  getInitialState(){
      return this.state = {
         todos: ['todo 1', 'todo 2', 'todo 3', 'todo 4']
      }
  },
  render(){
    //pass todos data from TodoApp state to TodosList props
    return <TodosList todos={this.state.todos} />
  }

})

let TodosList = React.createClass({
   render(){
     // render todos array into Todo components
     let todos = this.props.todos.map(function compileTodo(v,i){
       return <Todo key={i} index={i} label={v} />
     })
     return <ul>{todos}</ul>
   }
})

let Todo = React.createClass({
    render(){
      // render todo with label and index
      return <li index={this.props.i}>{this.props.label}</li>
    }
})

// Render entire TodoApp and append HTML to App#div
React.render(<TodoApp />, document.getElementById('App'))

/*

About React
React is a Javascript library for creating UI elements. It was developed by Facebook and it powers facebook.com and instagram.com.
It greatly simplifies complex UIs via self contained components that are easy to test and reuse. React is also lightning fast,
due to use of Shadow DOM. React renders the DOM virtually via Shadow DOM, and compares the difference. React only makes the minimum
amount of changes to DOM. Other libraries are slower, because they rerender the entire DOM when state changes.

Thinking in React
In React every piece of your application should be broken into small modules aka components. Components are
created using React.createClass({...}) and should only be responsible for one thing. Components contain data, methods and HTML. Optional in React
is JSX, which simplifies templates in react. I use it with babel and compile after every change.

Data flows unidirectionally from Parent to child components via component attributes and "this.props". State within a component is
can be manipulated via "this.state" and "setState({...})" within React.createClass({...})



Using React



main.jsx
let Message = React.creatClass({
    getInitialState(){
        return this.state = {
            message : "Hello World"
        }
    },
    render(){
        return <h1>{this.state.message}</h1>
    }
})

Todo Example App:
React.render(<Message />, document.getElementById('Message'))


More Resources
https://facebook.github.io/react/docs/why-react.html


 */
