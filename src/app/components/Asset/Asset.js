import React from "react";
import classes from "join-classnames";
import styles from "./Asset.css";
import TileList from "../TileList";
import SimpleForm from "../SimpleForm";

export default ({assets, onAdd, onReadToggle, onDelete}) => (
    <div className="asset">
        <SimpleForm onAdd={onAdd} />
        <TileList
            tiles={assets}
            onReadToggle={onReadToggle}
            onDelete={onDelete}
        />
    </div>
)