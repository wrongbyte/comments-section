import logo from './logo.svg';
import './App.css';
import JSONdata from './data';
import { useState } from 'react';
import Comment from './components/Comment';

function App() {
  // Os comentários iniciais no file são o estado inicial do componente; seria o equivalente a fazer uma query inicial na db
  const [data, setData] = useState(JSONdata);
  
  return (
    <main className='comments-column'>
      { data.comments.map((comment) => {
        return (
        <Comment
            key={comment.id}
            comment={comment.content}
            image={comment.user.image.png}
            username={comment.user.username}
            timeSince={comment.createdAt}
        />
        )
      }) 
      }
    </main>
  );
}

export default App;
