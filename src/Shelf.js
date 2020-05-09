import React from 'react';
import Book from './Book';
function ShelfComponent(props) {
    // console.log(props.refreshMyBooks)
    return props.books.length > 0 ? (
        <div className="shelf-component">
            <h2>{props.shelfName}</h2>
            <ul className="flex-container">
                {props.books.map(book => {
                    return <li key={book.id}>
                        <Book
                            refreshMyBooks={props.refreshMyBooks}
                            title={book.title}
                            id={book.id}
                            thumbnail={book.imageLinks ? book.imageLinks.smallThumbnail : null}
                            authors={book.authors}
                            shelf={book.shelf}></Book>
                    </li>;
                })}
            </ul>
        </div>
    ) : null;
}

export default ShelfComponent;
