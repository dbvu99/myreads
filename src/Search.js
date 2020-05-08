import React from 'react';
import './App.css';
import _ from 'lodash';

class SearchComponent extends React.Component {
    state = {
        keywords: "",
        inDebounce: null
    };

    handleInputChange = e => {
        this.setState({ keywords: e.target.value });
        clearTimeout(this.state.inDebounce);
        this.setState({
            inDebounce: setTimeout(() => {
                console.log("hi");
                this.setState({ inDebounce: null });
            }, 1000)
        });
    };

    render() {
        return (
            <div className="search-component">
                <form>
                    <input
                        id="search-bar"
                        placeholder="start typing ..."
                        value={this.state.keywords}
                        onChange={(e) => {
                            this.handleInputChange(e);
                        }}
                    >
                    </input>
                </form>
                {/* <nav>
                    <Link to="/">Main</Link>
                    <h1>MyReads</h1>
                    <Link to="/search">Search</Link>
                </nav>
                <Route exact path="/" component={Shelves}>
                </Route> */}
            </div>
        );
    }
}

export default SearchComponent;
