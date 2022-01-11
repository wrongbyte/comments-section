import logo from './logo.svg';
import './App.css';
import JSONdata from './data';
import { Fragment, useState } from 'react';
import Comment from './components/Comment';
import NewComment from './components/NewComment';

function App() {
  // Os comentários iniciais no file são o estado inicial do componente; seria o equivalente a fazer uma query inicial na db
  const [data, setData] = useState(JSONdata);
  
  return (
    <>
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
