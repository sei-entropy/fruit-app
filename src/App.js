import React from 'react';
import ListContainer from './ListContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Fruits</h1>
        <ListContainer />
      </div>
    );
  }
}