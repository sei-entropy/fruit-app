import React from 'react';
import ListItem from './ListItem';

export default class ListContainer extends React.Component {
  render() {
    return (
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}