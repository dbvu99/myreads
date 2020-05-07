import React from 'react';

class BookComponent extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div className="book-component">
                <img className="book-thumbnail" src={this.props.thumbnail}></img>
                <h4>{this.props.title}</h4>
                <ul>
                    {this.props.authors.map((author, index) => {
                        return <li key={index}>{author}</li>;
                    })}
                </ul>

                <select>
                    <option value="moveTo" selected>Move to</option>
                    <option value="currentReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        );
    }
}

export default BookComponent;
