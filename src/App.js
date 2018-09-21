import React, {
  Component
} from 'react';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/navbar'

class App extends Component {
  state = {
    counters: [{
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 6
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  handleIncrement = counter => {
    // replicate counters array
    const counters = [...this.state.counters];

    // dont directly modify state properties
    const index = counters.indexOf(counter);
    counters[index] = { ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters
    });
  };

  render() {
    return ( <
      React.Fragment >
      <
      NavBar / >
      <
      main className = "container" >
      <
      Counters counters = {
        this.state.counters
      }
      onDelete = {
        this.handleDelete
      }
      onIncrement = {
        this.handleIncrement
      }
      onReset = {
        this.handleReset
      }
      / > < /
      main > < /
      React.Fragment >
    );
  }
}

export default App;