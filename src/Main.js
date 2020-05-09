import React from 'react';
import Shelves from './Shelves';
import { getAll } from './BooksAPI';

class MainComponent extends React.Component {
    state = {
        myBooks: []
    };
    componentDidMount() {
        this.refreshMyBooks();
    }

    refreshMyBooks = () => {
        // console.log('test');
        getAll()
            .then(res => {
                this.setState(prevState => {
                    prevState.myBooks = res;
                    return prevState;
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        const shelves = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            none: []
        };

        this.state.myBooks.forEach(book => {
            if (book.shelf) {
                shelves[book.shelf].push(book);
            } else {
                shelves.none.push(book);
            }
        });
        return (
            <Shelves
                shelves={shelves}
                refreshMyBooks={this.refreshMyBooks}
            >
            </Shelves>
        );
    }
}




export default MainComponent;
