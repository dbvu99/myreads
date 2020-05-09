import React from 'react';
import './App.css';
import { search } from './BooksAPI';
import Shelf from './Shelf';
import Shelves from './Shelves';
import PropTypes from 'prop-types';
import { getAll } from './BooksAPI';



class SearchComponent extends React.Component {
    state = {
        myBooks: [],
        keywords: "",
        inDebounce: null,
        foundBooks: [],
        message: "no matches!"
    };

    componentDidMount() {
        this.refreshMyBooks();
    }

    searchBooks = () => {
        this.setState({ inDebounce: null });

        if (!this.state.keywords) {
            this.setState({ foundBooks: [], message: "no matches!" });
            return;
        }
        search(this.state.keywords)
            .then(res => {
                if (res && res.error) {
                    this.setState(prevState => {
                        prevState.foundBooks = [];
                        prevState.message = `no matches for '${this.state.keywords}'`;
                        return prevState;
                    });
                } else {
                    this.setState(prevState => {
                        prevState.foundBooks = res;
                        return prevState;
                    });

                }


            }).catch(err => {
                console.log(err);
                this.setState(null);
            });
    };

    debounce = (func, limit) => {
        clearTimeout(this.state.inDebounce);
        this.setState({ inDebounce: setTimeout(this.searchBooks, limit) });
    };
    handleInputChange = e => {
        const keywords = e.target.value;

        this.debounce(this.searchBooks, 1000);
        this.setState(prevState => {
            prevState.keywords = keywords;
            prevState.message = "searching";
            return prevState;
        });

    };

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

        const results = this.state.foundBooks.map(foundBook => {
            for (const myBook of this.state.myBooks) {
                if (foundBook.id === myBook.id) {

                    foundBook.shelf = myBook.shelf;
                    return foundBook;
                }
            }
            foundBook.shelf = "none";
            return foundBook;
        });

        const shelves = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            none: []
        };

        // this.state.foundBooks.forEach(book => {
        //     if (book.shelf) {
        //         shelves[book.shelf].push(book);
        //     } else {
        //         shelves.none.push(book);
        //     }
        // });

        return (
            <div className="search-component">

                <form>
                    <input
                        id="search-bar"
                        placeholder="start typing to search for books ..."
                        value={this.state.keywords}
                        onChange={(e) => {
                            this.handleInputChange(e);
                        }}
                    >
                    </input>

                    {this.state.foundBooks.length === 0 && <p>{this.state.message}</p>}
                </form>

                <Shelf
                    refreshMyBooks={this.refreshMyBooks}
                    shelfName={"Found Books"}
                    books={results}>
                </Shelf>

                {/* <Shelves
                    refreshMyBooks={this.refreshMyBooks}
                    shelves={shelves}>
                </Shelves> */}

            </div>
        );
    }
}

SearchComponent.propTypes = {
    keywords: PropTypes.string,
    inDebounce: PropTypes.func,
    foundBooks: PropTypes.arrayOf(Object),
    message: PropTypes.string
};

export default SearchComponent;
