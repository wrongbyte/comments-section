import logo from './logo.svg';
import './App.css';
import JSONdata from './data';
import { useState } from 'react';

import Comment from './components/Comment';
import NewComment from './components/NewComment';
import DeleteModal from './components/DeleteModal';

function App() {

  const [data, setData] = useState(JSONdata);
  const [deleteComment, setDeleteComment] = useState(false);

  const updateComment = (updatedContent, id) => {
    let temp = data;
    for (let comment of temp.comments) {
      if (comment.id === id) {
        comment.content = updatedContent;
        break;
      } 
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            reply.content = updatedContent;
            break;
          }
        }
      }
    }
    setData({...temp})
  }

  return (
    <>
    { deleteComment !== false &&
      <DeleteModal
      id={deleteComment}
      setDeleteComment={setDeleteComment}
      setData={setData}
      data={data}
      />
    }
    
    <main className='comments-column'>
      { data.comments.map((comment) => {
        return (
            <Comment
              updateComment={updateComment}
              setDeleteComment={setDeleteComment}
              key={comment.id}  
              currentUser={data.currentUser.username}
              comment={comment.content}
              image={comment.user.image.png}
              username={comment.user.username}
              timeSince={comment.createdAt}
              score={comment.score}
              replies={comment.replies}
              id={comment.id}
            />
          )
      })
      }
      <NewComment
      currentUser={data.currentUser}
      />
    </main>
    
    </>
  );
}

export default App;
