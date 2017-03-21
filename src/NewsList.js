import React, {Component} from 'react';
import New from './New';

class NewsList extends Component {
  render() {
    let NewsNodes = this.props.data.map(items => {
      return (
        <New title={items.title} description={items.description}/>
      )
    })
    return (
      <div>
        { NewsNodes }
      </div>
    )
  }
}

export default NewsList;
