import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      description: ''
    };
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.props.title}}>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.description}}>
        </div>
      </div>
    )
  }
}

export default New;
