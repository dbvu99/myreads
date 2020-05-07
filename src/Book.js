import React from 'react';
import { update } from './BooksAPI';

class BookComponent extends React.Component {
    options = [{
        value: "moveTo",
        label: "Move to ..."
    }, {
        value: "currentlyReading",
        label: "Currently Reading"
    }, {
        value: "wantToRead",
        label: "Want to Read"
    }, {
        value: "read",
        label: "Read"
    }];

    state = {
        shelfValue: "moveTo"
    };

    updateShelf = (props, e) => {
        update(props, e.currentTarget.value)
            .then(res => {
                this.props.refreshShelves(res);
            })
            .catch(console.log);


        this.setState((prevState) => ({ shelfValue: "moveTo" }));;
    };

    render() {
        return (
            <div className="book-component">
                <img className="book-thumbnail" src={this.props.thumbnail} alt="book cover"></img>
                <h4>{this.props.title}</h4>
                <ul>
                    {this.props.authors.map((author, index) => {
                        return <li key={index}>{author}</li>;
                    })}
                </ul>

                <select
                    onChange={(e) => this.updateShelf(this.props, e)}
                    value={this.state.shelfValue}
                >
                    {this.options
                        .filter(option => option.value !== this.props.shelf)
                        .map(option => <option
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </option>)}
                </select>
            </div>
        );
    }
}

export default BookComponent;
