import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const ListContainer = styled.div `
    max-width: 800px;
    /* border: 2px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

class FriendsList extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <ListContainer>
                {this.props.friendsData.map(friend => {
                    return(
                        <Friend 
                            key = {friend.id}
                            friend = {friend}
                            deleteFriend = {this.props.deleteFriend}
                        />
                    )
                })}
            </ListContainer>
        )
    } 
}


export default FriendsList;