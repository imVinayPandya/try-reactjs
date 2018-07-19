import React, { Component } from 'react';
import './App.css';
// import ConstLetVar from './learn/ConstLetVar';
// import PostList from './posts/PostList';

// import ReactYoutubeExample from './thirdParty/ReactYoutubeExample';
import ReactMarkdownExample from './thirdParty/ReactMarkdownExample';

class App extends Component {
  render() {
    const input = '<h1> Hello there</h1> \n\n # [This](http://google.com) is a header\n\nAnd this is a paragraph. \n\n http://google.com';

    return (
      <div className='App'>
        {/* <PostList /> */}
        {/* <ConstLetVar /> */}
        {/* <ReactYoutubeExample videoId="-_pgcFQ0l64" /> */}
        <ReactMarkdownExample input={input} />
      </div>
    );
  }
}

export default App;
