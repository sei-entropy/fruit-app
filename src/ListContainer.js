import React from 'react';
import ListItem from './ListItem';

export default class ListContainer extends React.Component {
  render() {
    const allFruits = this.props.fruits.map(function(fruit, index) {
      return <ListItem name={fruit} key={index} />;
    });

    return (
      <ul>
        {allFruits}
      </ul>
    );
  }
}