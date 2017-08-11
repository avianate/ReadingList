import React from "react";
import styles from "./SimpleForm.css";
import Button from "../Button";

export default class SimpleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textValue: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        const {onAdd} = this.props;
            
        onAdd(this.state.textValue);

        this.setState({textValue: ""});
    }

    handleChange(e) {
        this.setState({textValue:  e.target.value});
    }

    render() {
        return (
            <div className={styles.form} >
                <span>Add book by Title or ISBN: </span>
                <input type="text" value={this.state.textValue} onChange={this.handleChange} />
                <Button value="Add Book" onClick={this.handleSubmit} />
            </div>
        )
    }
};