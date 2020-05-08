import React from 'react';

import { getAll } from './BooksAPI';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

class ShelvesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
    }

    componentDidMount() {
        this.refreshShelves();
    }

    refreshShelves = data => {
        getAll()
            .then(res => {
                this.setState(prevState => {
                    prevState = {
                        books: data,
                        currentlyReading: [],
                        wantToRead: [],
                        read: []
                    };
                    res.forEach(books => {
                        prevState[books.shelf].push(books);
                    });

                    return prevState;
                });
            })
            .catch(err => console.log(err));

    };


    render() {
        return (
            <div className="shelves-component">
                <Shelf
                    refreshShelves={this.refreshShelves}
                    shelfName={"Currently Reading"}
                    books={this.state.currentlyReading}>
                </Shelf>
                <Shelf
                    refreshShelves={this.refreshShelves}
                    shelfName={"Want To Read"}
                    books={this.state.wantToRead}>
                </Shelf>
                <Shelf
                    refreshShelves={this.refreshShelves}
                    shelfName={"Read"}
                    books={this.state.read}>
                </Shelf>
            </div>
        );
    }
}


ShelvesComponent.propTypes = {
    books: PropTypes.arrayOf(Object),
    currentlyReading: PropTypes.arrayOf(Object),
    wantToRead: PropTypes.arrayOf(Object),
    read: PropTypes.arrayOf(Object),
};

export default ShelvesComponent;
