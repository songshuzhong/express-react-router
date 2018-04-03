import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import { About } from './About'
import Repos from './Repos'
import Repo from './Repo'
import { Home } from './Home'
import { MessageList } from './button';
import { TodoList } from './todoList';

import { propsExtends } from './wrapper';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={ propsExtends( About ) }/>
    <Route path="/message" component={MessageList}/>
    <Route path="/todoList" component={TodoList}/>
  </Route>
)
