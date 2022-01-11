import './deleteModal.css';

export default function DeleteModal ({
}) {
    return (
        <div className='modalBackground'>
            <div className='modal'>
                <div className='modalTitle'>Delete comment</div>
                <div>Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.</div>
                <div className='buttonsRow'>
                    <span id="cancel">NO, CANCEL</span>
                    <span id="confirm">YES, DELETE</span>
                </div>
            </div>
        </div>
    )
}