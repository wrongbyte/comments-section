import './newComment.css';

export default function newComment ({
    currentUser
}) {
    return (
        <div className='newComment'>
            <div className='avatarColumn'>
                <img className='avatarReply' src={currentUser.image.png} alt='current user avatar'/>
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