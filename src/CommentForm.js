import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {author: '', comment: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleCommentChange(e) {
    this.setState({ comment: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let comment = this.state.comment.trim();
    if (!comment || !author ) {
      return;
    }
    this.props.onCommentSubmit({author: author, comment: comment});
    this.setState({author: '', comment: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleAuthorChange} value={this.state.author}></input>
          <input type='text' onChange={this.handleCommentChange} value={this.state.comment}></input>
          <input type='submit' value='Post'></input>
        </form>
      </div>
    )
  }
}


export default CommentForm;
