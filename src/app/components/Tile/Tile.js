import React from 'react';
import classes from 'join-classnames';
import styles from "./Tile.css";

export default ({title, subtitle, author, image, actions, isRead}) => (
    <div className={classes(styles.Tile, isRead && styles.read)} >
        <img src={image} className="thumb" />
        <div className={classes(styles.info)} >
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <h3>{author}</h3>
        </div>
        
        <div className={classes(styles.controls)}>
            {actions}
        </div>

    </div>
)