import React from 'react';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
  state = {
   books: []
 }

   componentDidMount() {
      BooksAPI.getAll()
      .then(books => {
         this.setState({books});
      })
   }

   bookUpdater = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(books => {
         book.shelf = shelf;
         this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat(book)
         }))
      })
    }

   render() {
      return (
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf bookUpdater={this.bookUpdater} name='Current Reads' book={this.state.books.filter(b => b.shelf === 'currentlyReading')} />
                <Shelf bookUpdater={this.bookUpdater} name='Want To Read' book={this.state.books.filter(b => b.shelf === 'wantToRead')} />
                <Shelf bookUpdater={this.bookUpdater} name='Read' book={this.state.books.filter(b => b.shelf === 'read')} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
      );
   }
}

export default MainPage
