import { useState } from 'react';
import './comment.css';
// Vamos usar os states do React para funcionalidades como: atualizar comentário, adicionar resposta, etc
export default function Comment ({
    key,
    comment,
    image,
    username,
    timeSince,
    updateScore,
    updateComment,
    setDeleteComment
}) {
    const [newReply, setNewReply] = useState(false);
    const [edit, setEdit] = useState(false);
    console.log(username);
    return (
        <div className='comment'>
            
            <div className='scoreColumn'></div>

            <div className='contentColumn'>
                <div className='commentHeader'>
                    <img className='avatar' src={image} alt='avatar'/>
                    <div className='username'>{username}</div>
                    <div className='timestamp'>{timeSince}</div>
                    <div className='replyButton'>Reply</div>
                </div>
                <div className='commentContent'>{comment}</div>
            </div>

        </div>
    )
}