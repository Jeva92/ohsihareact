import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment: ''
    };
  }
  render() {
    return(
      <div>
        <h3>{this.props.author}</h3>
        <p>{this.props.comment}</p>
      </div>
    )
  }
}


export default Comment;
