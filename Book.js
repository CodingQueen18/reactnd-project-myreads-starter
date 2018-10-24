import React from 'react';


class Book extends React.Component {
  render() {
      return (
         <li>
         <div className="book">
           <div className="book-top">
             <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"}')` }}></div>
             <div className="book-shelf-changer">
               <select value={this.props.book.shelf || 'none'} onChange={(e) => (this.props.bookUpdater(this.props.book, e.target.value) )}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading">Current Reads</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
               </select>
             </div>
           </div>
           <div className="book-title">{this.props.book.title}</div>
           <div className="book-authors">{this.props.book.authors}</div>
         </div>
       </li>
      );
   }
}

export default Book
