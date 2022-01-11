import { useEffect, useState } from 'react';
import './comment.css';

export default function Comment ({
    currentUser,
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
    const [current, setCurrent] = useState(false);

    // Evaluate to true or false and then render HTML accordingly
    useEffect(() => {
        const curr = username === currentUser;
        setCurrent(curr);
    }, [currentUser, username]) 
    
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
                        { current ? <div className='youTag'>you</div> : ""}
                        <div className='timestamp'>{timeSince}</div>
                        { current 
                            ? 
                            <>
                            <div className='deleteButton'>
                            <img src='./images/icon-delete.svg' alt='reply'/>
                            <span> Delete</span>
                            </div>
                            <div className='editButton'>
                            <img src='./images/icon-edit.svg' alt='reply'/>
                            <span> Edit</span>
                            </div>
                            </>
                            
                            :
                            <div className='replyButton'>
                                {/* Note: we are using span and image, two inline elements, to make sure they align side-by-side */}
                            <img src='./images/icon-reply.svg' alt='reply'/>
                            <span> Reply</span> 
                            </div>
                        }
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
                                currentUser={currentUser}
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