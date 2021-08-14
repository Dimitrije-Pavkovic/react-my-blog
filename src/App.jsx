import React from 'react';

import { Header } from './components/Header/Header';
import { BlogList } from './components/Blog-list/BlogList';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogList />
    </React.Fragment>
  );
}

export default App;
