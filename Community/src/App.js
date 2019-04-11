import React from 'react';
import axios from 'axios';
// import {Route, Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import styled from 'styled-components';

const AppContainer = styled.div `
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AppHeader = styled.div `
  background: maroon;
  padding-bottom: 25px;
  border-bottom: 3px solid black;
`;

const AppTitle = styled.h1 `
  color: white;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },

      newFriend: {
        name: '',
        age: '',
        email: '',
        id: '',
      }
    }
  }
  

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
          console.log(response);
          this.setState({ friendsData: response.data })
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      friend: { ...this.state.friend, [event.target.name]: event.target.value }
    })
  };

  handleUpdate = event => {
    this.setState({
      newFriend: { ...this.state.newFriend, [event.target.name]: event.target.value }
    })
  }

  addFriend = person => {
    axios
      .post('http://localhost:5000/friends', person)
      .then(() => axios.get('https://localhost:5000/friends'))
        .then(response => {
          console.log(response);
          this.setState({
            friendsData: response.data,
          })
        .catch(err => console.log(err));
        })
      .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        friendsData: response.data
      })
    })
    .catch(err => console.log(err));
  }
  
  updateFriend = (id, person) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, person)
      .then(() => axios.get('http://localhost:5000/friends/'))
        .then(response => {
          console.log(response);
          this.setState({
            friendsData: response.data
          })
          .catch(err => console.log(err));
        })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>My Friends List!</AppTitle>
          <FriendsForm 
            handleChange = {this.handleChange}
            addFriend = {this.addFriend}
            friend = {this.state.friend}
            newFriend = {this.state.newFriend}
            updateFriend = {this.updateFriend}
            handleUpdate = {this.handleUpdate}
          />
        </AppHeader>
        <FriendsList 
          friendsData = {this.state.friendsData}
          deleteFriend = {this.deleteFriend}
        />
      </AppContainer>
    );
  }
}

export default App;