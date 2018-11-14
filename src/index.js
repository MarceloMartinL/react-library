import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BookRow extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <tr>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.pages}</td>
        <td>{book.read}</td>
      </tr>
    );
  }
}

class LibraryTable extends React.Component {
  render() {
    const rows = [];

    this.props.books.forEach(book => {
      rows.push(
        <BookRow
          book={book}
          key={book.name}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Read</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
    }
  }

  render() {
    return (
      <div>
        <LibraryTable 
          books={this.state.books}
        />
      </div>
    );
  }
}

const BOOKS = [
  {name: "Harry Potter", author: "J.K. Rowling", pages: 453, read: true},
  {name: "El nombre del viento", author: "Patrick Rothfuss", pages: 664, read: false},
  {name: "Padre Rico, Padre Pobre", author: "Robert Kiyosaki", pages: 322, read: true},
  {name: "El Alquimista", author: "Paulo Cohelo ", pages: 289, read: true},
];

// ==========================================

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);
