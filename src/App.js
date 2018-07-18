import React, { Component } from 'react';
import './App.css';
// import ConstLetVar from './learn/ConstLetVar';
import PostList from './posts/PostList';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PostList />
        {/* <ConstLetVar /> */}
      </div>
    );
  }
}

export default App;
