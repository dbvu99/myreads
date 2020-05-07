import React from 'react'
import Book from './Book'
class ShelveComponent extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }


    render() {
        return (
            <div className="shelve-component">
                <h2>{this.props.shelveName}</h2>
                <ul>
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

export default ShelveComponent;
