import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Mainpage from './Mainpage'
import Searchpage from './Searchpage'

class BooksApp extends React.Component {
  render() {
    return(
      <div>
       <Route exact path='/' component={ Mainpage } />
       <Route exact path='/search' component={ Searchpage } />
      </div>
    );
  }
}

export default BooksApp
