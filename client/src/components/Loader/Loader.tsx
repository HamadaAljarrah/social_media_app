import React from 'react'
import classes from "./Loader.module.scss"


export const Loader = () => {
    return (
        <div className={classes.wrapper}>
            <div id='loader' className={classes.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
