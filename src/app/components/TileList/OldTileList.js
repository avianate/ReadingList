import React from "react";
import classes from "join-classnames";
import styles from "./TileList.css";
import Tile from "../Tile";

export default ({bookList, onDelete, onToggleRead}) => (
    <div className={classes(styles.tileList, "tile-list")}>
        {
            bookList.map((book) => (
                <Tile
                    key={book.id}
                    bookId={book.id}
                    imageSrc={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    subtitle={book.volumeInfo.subtitle}
                    onDelete={onDelete}
                    onToggleRead={onToggleRead}
                    isRead={book.isRead}
                />
            ))
        }
    </div>
)