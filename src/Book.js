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
    }, {
        value: "none",
        label: "None",
    }];

    state = {
        shelfValue: "moveTo"
    };

    updateShelf = (props, e) => {
        console.log('updating');
        update(props, e.currentTarget.value)
            .then(res => {
                res && this.props.refreshMyBooks && this.props.refreshMyBooks();
            })
            .catch(console.log);


        this.setState((prevState) => ({ shelfValue: "moveTo" }));;
    };

    render() {
        return (
            <div className="book-component">
                {this.props.thumbnail && <img className="book-thumbnail" src={this.props.thumbnail} alt="book cover"></img>}
                <h4>{this.props.title}</h4>
                <ul>
                    {this.props.authors && this.props.authors.map((author, index) => {
                        return <li key={index}>{author}</li>;
                    })}
                </ul>

                <select
                    onChange={(e) => e.currentTarget.value !== this.props.shelf && this.updateShelf(this.props, e)}
                    value={this.state.shelfValue}
                >
                    {this.options
                        // .filter(option => option.value !== this.props.shelf)
                        .map(option => <option
                            key={option.value}
                            value={option.value}
                            disabled={option.value === "moveTo" || this.props.shelf == option.value}
                            label={this.props.shelf == option.value ? '✔ ' + option.label : option.label}
                        >
                        </option>)}
                </select>
            </div>
        );
    }
}

export default BookComponent;
