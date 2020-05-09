import React from 'react';

import Shelf from './Shelf';
import PropTypes from 'prop-types';

function ShelvesComponent(props) {
    // console.log(props.refreshMyBooks)
    return (
        <div className="shelves-component">
            <Shelf
                refreshMyBooks={props.refreshMyBooks}
                shelfName={"Currently Reading"}
                books={props.shelves.currentlyReading}>
            </Shelf>
            <Shelf
                refreshMyBooks={props.refreshMyBooks}
                shelfName={"Want To Read"}
                books={props.shelves.wantToRead}>
            </Shelf>
            <Shelf
                refreshMyBooks={props.refreshMyBooks}
                shelfName={"Read"}
                books={props.shelves.read}>
            </Shelf>
        </div>
    );

}


ShelvesComponent.propTypes = {
    currentlyReading: PropTypes.arrayOf(Object),
    wantToRead: PropTypes.arrayOf(Object),
    read: PropTypes.arrayOf(Object),
};

export default ShelvesComponent;
