import React from 'react'
import Book from './Book'
class ShelfComponent extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="shelf-component">
                <h2>{this.props.shelfName}</h2>
                <ul className="flex-container">
                    {this.props.books.map(book => {
                        console.log(book)
                        return <li key={book.id}>
                            <Book title={book.title} thumbnail={book.imageLinks.smallThumbnail} authors={book.authors}></Book>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default ShelfComponent;
