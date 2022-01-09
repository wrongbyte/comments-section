import { useState } from 'react';
import './comment.css';
// Vamos usar os states do React para funcionalidades como: atualizar comentário, adicionar resposta, etc
export default function Comment ({
    comment,
    image,
    username,
    timeSince,
    score,
    replies,
    updateScore,
    updateComment,
    setDeleteComment
}) {
    const [newReply, setNewReply] = useState(false);
    const [edit, setEdit] = useState(false);
    return (
        <>
            <div className='comment'>

                <div className='scoreColumn'>
                    <img className="flex-item"src='./images/icon-plus.svg'/>
                    <span className="flex-item">{score}</span>
                    <img className="flex-item" src='./images/icon-minus.svg'/>
                </div>

                <div className='contentColumn'>
                    <div className='commentHeader'>
                        <img className='avatar' src={image} alt='avatar'/>
                        <div className='username'>{username}</div>
                        <div className='timestamp'>{timeSince}</div>
                        <div className='replyButton'>
                            {/* Note: we are using span and image, two inline elements, to make sure they align side-by-side */}
                        <img src='./images/icon-reply.svg' alt='reply'></img>
                        <span> Reply</span> 
                        </div>
                    </div>
                    <div className='commentContent'>{comment}</div>
                </div>

            </div>

        {replies?.length > 0 && 
            replies.map((reply) => {
                return (
                        <div className='commentReplies'>
                            <div className='verticalLine'></div>
                            <Comment
                                key={reply.id}
                                comment={reply.content}
                                image={reply.user.image.png}
                                username={reply.user.username}
                                timeSince={reply.createdAt}
                                score={reply.score}
                                replies={reply.replies}
                            />
                        </div>
                )
            })
        }
        </>
    )
}