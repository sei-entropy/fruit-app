import React from 'react';
import ListContainer from './ListContainer';
import Search from './Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Initalize the Search Value to an Empty String
    this.state = {
      searchValue: 'Water',
    };
  }

  handleSearchChange = (e) => {
    const textValue = e.target.value;
    console.log('Box', textValue)

    this.setState({
      searchValue: textValue,
    });
  }

  render() {
    return (
      <div>
        <h1>Fruits</h1>
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange} />
        <ListContainer fruits={this.props.fruits} />
      </div>
    );
  }
}