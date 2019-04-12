import React from 'react';
import styled from 'styled-components';

const ChangeBtn = styled.button `
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px;
    border: 2px solid silver;
    background-color: lightgray;
    color: black;
`;

const Input = styled.input `
  font-size: 16px;
  border: 2px solid silver;
  padding: 5px 10px;
`;

class FriendsForm extends React.Component {
  // constructor(props){
  //     super(props);  
  // }

  render() {
    return(
      <div>
        {/*Add Friend  */}
        <form>
          <Input 
            type = 'text'
            placeholder = 'Enter Name'
            name = 'name'
            value = {this.props.friend.name}
            onChange = {this.props.handleChange}
          />

          <Input 
            type = 'text'
            placeholder = 'Enter Age'
            name = 'age'
            value = {this.props.friend.age}
            onChange = {this.props.handleChange}
          />

          <Input 
            type = 'text'
            placeholder = 'Enter Email'
            name = 'email'
            value = {this.props.friend.email}
            onChange = {this.props.handleChange}
          />
          <ChangeBtn onClick = {() => this.props.addFriend(this.props.friend)}>Add Friend</ChangeBtn>
        </form>

        {/* Edit Friend */}
        <form>
          <Input 
            type = 'text'
            placeholder = 'Name'
            name = 'name'
            value = {this.props.newFriend.name}
            onChange = {this.props.handleUpdate}
          />

          <Input 
            type = 'text'
            placeholder = 'Age'
            name = 'age'
            value = {this.props.newFriend.age}
            onChange = {this.props.handleUpdate}
          />

          <Input 
            type = 'text'
            placeholder = 'Email'
            name = 'email'
            value = {this.props.newFriend.email}
            onChange = {this.props.handleUpdate}
          />

          <Input 
            type = 'text'
            placeholder = 'id #'
            name = 'id'
            value = {this.props.newFriend.id}
            onChange = {this.props.handleUpdate}
          />
          <ChangeBtn onClick = {() => this.props.updateFriend(this.props.newFriend.id, this.props.newFriend)}>Update</ChangeBtn>  
      </form>
    </div>
    )
  }
}

export default FriendsForm;