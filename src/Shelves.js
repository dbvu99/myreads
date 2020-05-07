import React from 'react'

import { getAll } from './BooksAPI'
import Shelve from './Shelve'
class ShelvesComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    componentDidMount() {
        getAll()
            .then(res => {
                this.setState(prevState => {
                    prevState = {
                        currentlyReading: [],
                            wantToRead: [],
                                read: []
                    }
                    res.forEach(books => {
                        prevState[books.shelf].push(books)
                    });

                    return prevState
                })
            }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className="shelves-component">
                <Shelve shelveName={"Currently Reading"} books={this.state.currentlyReading}></Shelve>
                <Shelve shelveName={"Want To Read"} books={this.state.wantToRead}></Shelve>
                <Shelve shelveName={"Read"} books={this.state.read}></Shelve>
            </div>
        );
    }
}

export default ShelvesComponent;
