import logo from './logo.svg';
import './App.css';
import JSONdata from './data';
import { useEffect, useState, useRef } from 'react';

import Comment from './components/Comment';
import NewComment from './components/NewComment';
import DeleteModal from './components/DeleteModal';

function App() {
  // Os comentários iniciais no file são o estado inicial do componente; seria o equivalente a fazer uma query inicial na db
  const [data, setData] = useState(JSONdata);
  const [deleteComment, setDeleteComment] = useState(false);

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
