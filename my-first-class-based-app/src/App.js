import { PureComponent } from 'react';
import './App.css';
import Momxmarebeli from './User';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      users: [{name: 'Temo'}],
      show: true
    }
  }

  static getDerivedStateFromProps(state, props) {
    console.log('getDerivedStateFromProps')
    return state;
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log('shouldComponentUpdate')
  //   return prevState.show !== this.state.show || prevState.users !== this.state.users;
  // }

  onChange = (event, index) => {
    const users = [...this.state.users];
    const user = {...users[index]};
    user.name = event.target.value;
    users[index] = user;
    this.setState({users});
  }

  addUser = () => {
    const users = [...this.state.users];
    users.push({name: ''});
    this.setState({users});
  }

  toggle = () => {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={() => this.setState({show: true})}>Show</button>
        {this.state.show && this.state.users.map((user, index) => {
          return <Momxmarebeli key={index} name={user.name} onChange={(event) => this.onChange(event, index)} />
        })}
        
        <button onClick={this.addUser}>Add new user</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'name'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
  }

  componentWillUnmount() {

  }
}

export default App;
