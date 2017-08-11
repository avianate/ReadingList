import React from "react";
import classes from "join-classnames";
import styles from "./TileList.css";
import Tile from "../Tile";
import ActionIcons from "../ActionIcons/ActionIcons";

export default ({ tiles={}, onReadToggle, onDelete}) => (
    <div className={styles.tileList}>
        { 
            Object.keys(tiles).map((key) => {
                let tile = tiles[key];
                return (
                        <Tile
                            key={key}
                            {...tile}
                            actions={
                                <ActionIcons
                                    isChecked={tile.isRead}
                                    onToggleChecked={() => (onReadToggle(key))}
                                    onDelete={() => (onDelete(key))}
                                />
                            }
                        />
                    )
                })
        }
    </div>
)