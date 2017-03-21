import React, { Component } from 'react';
import NewsList from './NewsList';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadNewsFromServer = this.loadNewsFromServer.bind(this);
  }
  loadNewsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({data: res.data.items});
    })
  }
  componentDidMount() {
    this.loadNewsFromServer();
    setInterval(this.loadNewsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div>
        <h2>News:</h2>
        <NewsList data={this.state.data } />
      </div>
    )
  }
}

export default News;
