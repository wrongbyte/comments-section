import logo from './logo.svg';
import './App.css';
import JSONdata from './data';
import { useEffect, useState } from 'react';

import Comment from './components/Comment';
import NewComment from './components/NewComment';
import DeleteModal from './components/DeleteModal';

function App() {
  // Os comentários iniciais no file são o estado inicial do componente; seria o equivalente a fazer uma query inicial na db
  const [data, setData] = useState(JSONdata);

  return (
    <>
    <DeleteModal/>
    <main className='comments-column'>
      { data.comments.map((comment) => {
        return (
            <Comment
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
