import BookSearchService from "../services/book-search.js";

import * as actions from "../reducers/reading-list-reducer.js";

function bookSearchActionCreator(searchResult) {
    return {
        type: actions.ADD_BOOK_TO_LIST,
        book: searchResult
    }
};

export function onDeleteBook(bookId) {
    return {
        type: actions.REMOVE_BOOK_FROM_LIST,
        bookId: bookId
    }
};

export function onReadToggle(bookId) {
    return {
        type: actions.TOGGLE_READ,
        bookId: bookId
    }
};

export const searchForBook = (data) => (dispatch) => (
    BookSearchService(data)
        .then(n => dispatch(bookSearchActionCreator(n)))
);
