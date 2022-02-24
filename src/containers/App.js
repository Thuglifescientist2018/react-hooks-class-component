import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField} from '../actions';
import {connect} from 'react-redux';




class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      
    }
  }

  componentDidMount() {
    console.log("state :", this.props);
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


  render() {
    const { robots} = this.state;
    console.log("props: ", this.props)
    const {searchField, onSearchChange} = this.props;
    (() =>  {
      setTimeout(() => {
        console.log("props searchField: ", searchField)
      }, 5000)
    })();
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
const mapStateToProps = state => {
  console.log("mapstatetoprops: ", state)
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) =>  { 
  return {
    onSearchChange: (event) => {
      console.log("dispatch: ", event.target.value);
    return dispatch(setSearchField(event.target.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
