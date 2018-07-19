import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import StaticRouteComponent from './routingComponents/StaticRouteComponent';
import NotFound from './routingComponents/NotFound';
import DynamicRouteComponent from './routingComponents/DynamicRouteComponent';
// import ConstLetVar from './learn/ConstLetVar';
// import PostList from './posts/PostList';

// import ReactYoutubeExample from './thirdParty/ReactYoutubeExample';
// import ReactMarkdownExample from './thirdParty/ReactMarkdownExample';

class App extends Component {
  render() {
    const loggedIn = false;
    const supportsHistory = 'pushState' in window.history;
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">Navbar</a>
        </nav>
        <BrowserRouter forceRefresh={!supportsHistory}>
          <Switch>
            <Route exact path='/about' component={StaticRouteComponent} />
            <Route path='/posts/:slug' component={DynamicRouteComponent} />
            <Route component={NotFound} />

            <Route exact path='/user' render={() => (
              loggedIn === true ? (
                <Redirect to='/posts/hello-there/' />
              ) : (
                  <StaticRouteComponent />
                )
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  //#region old code
  // render() {
  //   const input = '<h1> Hello there</h1> \n\n # [This](http://google.com) is a header\n\nAnd this is a paragraph. \n\n http://google.com';

  //   return (
  //     <div className='App'>
  //       {/* <PostList /> */}
  //       {/* <ConstLetVar /> */}
  //       {/* <ReactYoutubeExample videoId="-_pgcFQ0l64" /> */}
  //       <ReactMarkdownExample input={input} />
  //     </div>
  //   );
  // }
  //#endregion
}

export default App;
