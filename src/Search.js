import React from 'react';
import './App.css';
import { search } from './BooksAPI';
import Shelf from './Shelf';
import PropTypes from 'prop-types';



class SearchComponent extends React.Component {
    state = {
        keywords: "",
        inDebounce: null,
        foundBooks: [],
        message: "no matches!"
    };

    searchBooks = () => {
        this.setState({ inDebounce: null });

        if (!this.state.keywords) {
            this.setState({ foundBooks: [], message: "no matches!" });
            return;
        }
        search(this.state.keywords)
            .then(res => {
                this.setState(res && res.error ? {
                    foundBooks: [],
                    message: `no matches for '${this.state.keywords}'`
                } : {
                        foundBooks: res,
                        message: null

                    });
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

    render() {
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
                </form>

                <Shelf
                    refreshShelves={null}
                    shelfName={"Found Books"}
                    books={this.state.foundBooks}>
                </Shelf>

                {this.state.foundBooks.length === 0 && <p>{this.state.message}</p>}
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
