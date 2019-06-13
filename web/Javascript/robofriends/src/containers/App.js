import React, {Component} from 'react';
import CardList from '../componets/CardList';
import SearchBox from '../componets/SearchBox';
import Scroll from '../componets/Scroll';
import {robots} from '../robots';
 

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robots => {
          return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
          return <h1>Loading</h1>
        }else {
        return (
            <div className="tc">
              <h1>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList robots={filterRobots} />
              </Scroll>
            </div>
          );
    }
    }
}

export default App;