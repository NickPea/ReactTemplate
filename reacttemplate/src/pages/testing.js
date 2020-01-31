import React from 'react'
import ShowBootstrap from "../pages/showbootstrap";
import style from "./testing.module.css"

function testing() {
    return (
        <div className={style.pageWrapper}>
            <h6 className={style.pageTitle}>... a new page for component testing</h6>
            <ShowBootstrap />
        </div>
    )
}

export default testing
