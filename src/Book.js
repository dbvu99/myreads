import React from 'react'

class BookComponent extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }


    render() {
        return (
            <div className="book-component">
                <img src={this.props.thumbnail}></img>
                <h4>{this.props.title}</h4>
                <ul>
                    {this.props.authors.map((author, index) => {
                        return <li key={index}>{author}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default BookComponent;
