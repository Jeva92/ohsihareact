import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render () {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} comment={comment.comment} />
      )
    })
    return(
      <div>
        {commentNodes}
      </div>
    )
  }
}

export default CommentList;
