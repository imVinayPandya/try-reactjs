import React, { Component } from 'react';
import './App.css';
// import ConstLetVar from './learn/ConstLetVar';
// import PostList from './posts/PostList';

import ReactYoutubeExample from './thirdParty/ReactYoutubeExample';

class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* <PostList /> */}
                {/* <ConstLetVar /> */}
                <ReactYoutubeExample videoId="-_pgcFQ0l64" />
            </div>
        );
    }
}

export default App;
