export const ADD_BOOK_TO_LIST = "ADD_BOOK_TO_LIST";
export const REMOVE_BOOK_FROM_LIST = "REMOVE_BOOK_FROM_LIST";
export const TOGGLE_READ = "TOGGLE_READ";

export default function(state = {}, action) {
    switch(action.type) {
        case ADD_BOOK_TO_LIST:
            let newState = Object.assign({}, {...action.book}, state);
            return newState;
        case REMOVE_BOOK_FROM_LIST:
            newState = Object.assign({}, state);
            delete newState[action.bookId];
            return newState;
        case TOGGLE_READ:
            newState = Object.assign({}, state);
            let book = newState[action.bookId];
            book.isRead = !book.isRead;
            return newState;
        default:
            return state;
    }
}