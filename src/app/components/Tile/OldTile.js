import React from 'react';
import classes from 'join-classnames';
import styles from "./Tile.css";

export default ({bookId, imageSrc, title, author, subtitle, isRead, onToggleRead, onDelete}) => (
    <div className={classes(styles.tile, "tile", isRead ? styles.read : "unread")} data-book-id={bookId}>
        <img src={imageSrc} className="thumb" />
        <div className={classes(styles.info, "info")} >
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <h3>{author}</h3>
        </div>
        
        <div className={classes(styles.controls, "controls")}>
            {
                !isRead 
                    ? <svg viewBox="0 0 32 32" className="unread" onClick={() => (onToggleRead(bookId))} >
                          <path className="path1" d="M12.42 28.678l-12.433-12.238 6.168-6.071 6.265 6.167 13.426-13.214 6.168 6.071-19.594 19.285zM3.372 16.441l9.048 8.905 16.208-15.953-2.782-2.739-13.426 13.214-6.265-6.167-2.782 2.739z"></path>
                      </svg>
                    : <svg viewBox="0 0 32 32" className="read" onClick={() => (onToggleRead(bookId))} >
                          <path className="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
                      </svg>
            }

            {/* Delete Button */}
            <svg viewBox="0 0 32 32" className="delete" onClick={() => (onDelete(bookId))}>
                <path className="path1" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
            </svg>
        
        </div>

    </div>
)