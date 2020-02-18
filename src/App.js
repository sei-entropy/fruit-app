import React from 'react';
import ListContainer from './ListContainer';
import Search from './Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Initalize the Search Value to an Empty String
    this.state = {
      searchValue: '',
      fruitsToDisplay: this.props.fruits,
    };
  }

  handleSearchChange = (e) => {
    const textValue = e.target.value;

    // Take the text box current value
    // Filter the Fruits Array into a new Array

    const filteredFruitList = this.props.fruits.filter(function(fruit) {
      return fruit.toLowerCase().includes(textValue.toLowerCase());
    });

    this.setState({
      searchValue: textValue,
      fruitsToDisplay: filteredFruitList,
    });
  }

  render() {
    return (
      <div>
        <h1>Fruits</h1>
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange} />
        <ListContainer fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}