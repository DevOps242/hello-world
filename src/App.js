import React, { Component }from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Input from './components/Input';
import Header from './components/layout/Header';
import AddTodo  from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  // Adding state
  state = {
    todos : []
  }

//Making our first HTTPS Request
// Component did mount to make GET requests

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }

// Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
// Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

    // Using the filter() to match and return an array that doesnt have the targeted id
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

// Add Todo with a HTTPS REQUEST POST
addTodo = (title) =>
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}));




  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                {/*Bringing in the Todo component to the App.js file.*/}
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
                <Input />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
