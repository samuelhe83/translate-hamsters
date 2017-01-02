import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './Components/App.jsx';
import AppStore from './Components/AppStore.jsx';

import About from './Components/About.jsx';
import Signup from './Components/Signup.jsx';
import Home from './Components/Home.jsx';
import Library from './Components/Library.jsx';
import SearchResults from './Components/SearchResults.jsx';
import NewWord from './Components/NewWord.jsx';
import WordDetails from './Components/WordDetails.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ App } store={ AppStore } >
      <IndexRoute component={ About } />
      <Route path="/signup" component={ Signup } />
      <Route path="/home" component={ Home } />
      <Route path="/library" component={ Library } />
      <Route path="/searchresults" component={ SearchResults } />
      <Route path="/newword" component={ NewWord } />
      <Route path="/worddetails" component={ WordDetails } />
    </Route>
  </Router>
), document.getElementById('app'));