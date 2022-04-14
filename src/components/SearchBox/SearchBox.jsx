import { Component } from 'react';
import './styles.css'

class SearchBox extends Component {
  render() {

    return (
      <div>
        <input
          type="search"
          className={`${this.props.className} monsters-search-box`}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
