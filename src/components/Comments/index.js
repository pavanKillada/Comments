import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onCreateComment = event => {
    event.preventDefault()
    const {commentsList, name, comment} = this.state
    const newComment = {
      id: v4(),
      name,
      comment,
      liked: false,
    }
    if (name !== '' && comment !== '') {
      this.setState({
        commentsList: [...commentsList, newComment],
        name: '',
        comment: '',
      })
    }
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComm => {
        if (eachComm.id === id) {
          return {...eachComm, liked: !eachComm.liked}
        }
        return eachComm
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComm => eachComm.id !== id),
    })
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg">
        <div className="form-img-container">
          <form onSubmit={this.onCreateComment}>
            <h1 className="main-heading">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              onChange={this.onNameChange}
              className="name-input"
              type="text"
              placeholder="Your Name"
              value={name}
            />
            <br />
            <textarea
              onChange={this.onCommentChange}
              className="comment-input"
              type="textarea"
              placeholder="Your Comment"
              value={comment}
            />
            <div>
              <button className="add-comment" type="submit">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="comments">
          <p className="comments-count">{commentsList.length}</p>
          <p>Comments</p>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachComment={eachComment}
              className={
                initialContainerBackgroundClassNames[
                  commentsList.length %
                    initialContainerBackgroundClassNames.length
                ]
              }
              onClickLike={this.onClickLike}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
