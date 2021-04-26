import React, { useState, useEffect } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { firestore } from '../firebase';
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from "react-router-dom";
// ID of the doc
// Retrieve old Comments from subcollection
// Write Comment to subcollection
const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#5e677d',
      main: '#333d51',
      dark: '#0b1729',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffdd5e',
      main: '#d3ac2b',
      dark: '#9e7d00',
      contrastText: '#000',
    },
  },
});

function CommentCard(props){
  const {user, date, body, photo} = props;
  return(
    <Comment.Group>
    <Comment>
        <Comment.Avatar as='a' src={photo} />
        <Comment.Content>
          <Comment.Author as='a'>{user}</Comment.Author>
          <Comment.Metadata>
            <span>{date}</span>
          </Comment.Metadata>
          <Comment.Text>{body}</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
      </Comment.Group>
    )
}
const CommentExampleThreaded = (props) => {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody]=useState("");
  const {currentUser}=useAuth();
  const history=useHistory();
  var currentDate = Date().toLocaleString();

  const handleChangeCommentBody=(e)=>{
    setCommentBody(e.target.value);
  }

  function PostComment(){
    if(currentUser){
        firestore.collection('listings').doc(props.id).collection('comments').add({
        user:currentUser.displayName,
        date:currentDate,
        body:commentBody,
        photo: currentUser.photoURL
      });
    }else{
      history.push("/login");
    }
  }
  console.log(props.id)
    useEffect(() => {
    firestore.collection('listings').doc(props.id).collection('comments').orderBy('date').onSnapshot(snapshot => {
        setComments(snapshot.docs.map(doc => ({
          id: doc.id,
          product: doc.data()
      })))
    })
  }, []);
  const getComments =  (id, product) => {
    return (
          CommentCard(product)
      );
    };
  return (
    <div>
      {
       comments.map(({id, product}) => (
          getComments(id, product)
        ))
      }
      <Form onSubmit={PostComment}>
      <Form.TextArea onChange={handleChangeCommentBody}/>
      <Button content='Add Reply' labelPosition='left' icon='edit' primary type="submit"/>
    </Form>
    </div>
  );
}

export default CommentExampleThreaded
