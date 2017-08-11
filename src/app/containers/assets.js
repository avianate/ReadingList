import React, {Component} from "react";
import {connect} from "react-redux";
import {searchForBook, onDeleteBook, onReadToggle} from "../actions/reading-list-actions";
import AssetsView from "../views/AssetsView";
import { setPageMeta } from "../actions/page-meta";

const pageMeta = {
    title: "Reading List",
    tags: [
        {"name": "description", "content": "A react reading list"},
        {"property": "", "content": "article"}
    ]
};

const mapStateToProps = (state) => ({
    assets: state.readingList
});

const bindActionsToDispatch = (dispatch) => ({
    onAdd: (data) => dispatch(searchForBook(data)),
    onDelete: (data) => dispatch(onDeleteBook(data)),
    onReadToggle: (data) => dispatch(onReadToggle(data)),
    setPageMeta: (metadata) => dispatch(setPageMeta(metadata))
});

const mergeAllProps = (store, actions) => ({
    ...store,
    ...actions,
    init: () => actions.setPageMeta(pageMeta),
    pageTitle: "React/Redux Start"
});

const storeConnector = connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllProps
);

class ReadingListContainer extends Component {
    
    static onServer(props, store) {
        return store.dispatch(setPageMeta(pageMeta))
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        return <AssetsView {...this.props} />
    }
}

export default storeConnector(ReadingListContainer);