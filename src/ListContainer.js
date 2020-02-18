import React from 'react';
import ListItem from './ListItem';

const fruits = [
  'Mango', 'Banana', 'Orange',
  'Apple', 'Pineapple', 'Dates',
];

export default class ListContainer extends React.Component {
  render() {
    const allFruits = fruits.map(function(fruit, index) {
      return <ListItem name={fruit} key={index} />;
    });

    return (
      <ul>
        {allFruits}
      </ul>
    );
  }
}