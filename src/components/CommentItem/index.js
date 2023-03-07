// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, className, onClickLike, onDeleteComment} = props
  const {id, name, comment, liked} = eachComment
  const onLike = () => {
    onClickLike(id)
  }
  const onDelete = () => {
    onDeleteComment(id)
  }
  return (
    <li>
      <div className="profile-comment">
        <div className={`profile-pic ${className}`}>
          <p>{name[0]}</p>
        </div>
        <div>
          <div className="name-time">
            <h1 className="user-name">{name}</h1>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="user-comment">{comment}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={onLike} className="like-img-btn" type="button">
          {!liked ? (
            <img
              className="like-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          ) : (
            <img
              className="like-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
            />
          )}
        </button>
        <button
          onClick={onLike}
          className={`like-btn ${liked ? 'active-like-btn' : ''}`}
          type="button"
        >
          Like
        </button>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="delete-img-btn"
          type="button"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
