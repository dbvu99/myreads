import React from 'react'

class ShelveComponent extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }


    render() {
        return (
            <div className="shelve-component">
                <h4>{this.props.shelveName}</h4>
                <ul>
                    {this.props.books.map(book => {
                        console.log(book)
                    return <li key={book.id}>{book.title}</li>
                })}
                </ul>
            </div>
        );
    }
}

export default ShelveComponent;
