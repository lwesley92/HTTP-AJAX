import React from 'react';
import styled from 'styled-components';

const DeleteBtn = styled.button `
    border-radius: 20%;
    background-color: maroon;
    margin-bottom: 10px;
    width: 80%;
    font-weight: bold;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px;
    border: 2px solid silver;
`;

const FriendCont = styled.div `
    background-image: linear-gradient(to right, pink, lightyellow, lightblue);
    border: 3px solid black;
    border-radius: 15%;
    margin: 10px auto;
    width: 45%;
`;

const DetailSpan = styled.span `
    font-weight: bold;
`;

const FriendTitle = styled.h1 `
    text-decoration: underline;
`;

const FriendDetails = styled.div `
    /* border: 1px solid black; */
`;

const FriendP = styled.p `
    font-size: 18px;
`;


class Friend extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return(
            <FriendCont>
                <FriendDetails>
                    <FriendTitle>{this.props.friend.name}</FriendTitle>
                    <FriendP><DetailSpan>Age: </DetailSpan>{this.props.friend.age}</FriendP>
                    <FriendP><DetailSpan>Email: </DetailSpan>{this.props.friend.email}</FriendP>
                    <FriendP><DetailSpan>ID: </DetailSpan>{this.props.friend.id}</FriendP>
                </FriendDetails>
                <DeleteBtn onClick = {() => this.props.deleteFriend(this.props.friend.id)}>Delete</DeleteBtn>
            </FriendCont>
        )
    }
}

export default Friend;