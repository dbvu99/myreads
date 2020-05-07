import React from 'react';

import { getAll } from './BooksAPI';
import Shelf from './Shelf';
class ShelvesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
    }

    componentDidMount() {
        getAll()
            .then(res => {
                this.setState(prevState => {
                    prevState = {
                        currentlyReading: [],
                        wantToRead: [],
                        read: []
                    };
                    res.forEach(books => {
                        prevState[books.shelf].push(books);
                    });

                    return prevState;
                });
            }).catch(err => console.log(err));
    }


    render() {
        return (
            <div className="shelves-component">
                <Shelf shelfName={"Currently Reading"} books={this.state.currentlyReading}></Shelf>
                <Shelf shelfName={"Want To Read"} books={this.state.wantToRead}></Shelf>
                <Shelf shelfName={"Read"} books={this.state.read}></Shelf>
            </div>
        );
    }
}

export default ShelvesComponent;
