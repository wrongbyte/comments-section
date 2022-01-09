import './newComment.css';
import { useState } from 'react';

export default function newComment ({
    currentUser
}) {
    // const [commentPosted, setCommentPosted] = useState(false);
    const userImage = './images/avatars/image-juliusomo.png';
    return (
        <div className='newComment'>
            <div className='avatarColumn'>
                <img className='avatarReply' src={userImage} alt='current user avatar'/>
            </div>
            
            <div className='inputColumn'>
                <textarea 
                className='replyInput'
                placeholder='Add a comment...'
                ></textarea>
            </div>
            <div className='sendColumn'>
                <button className='sendButton'>SEND</button>
            </div>
        </div>
    )
}