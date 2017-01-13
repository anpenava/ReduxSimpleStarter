import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="row search-bar">
        <div className="col-md-3">
          <img src="images/logo.png" />
        </div>

        <div className="col-md-9">
            <input
              className="search-input"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
    );

  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
