import React from 'react'
import BootstrapPage from "./showbootstrap";
import style from "./testing.module.css"

function testing() {
    return (
        <div className={style.pageWrapper}>
            <h6 className={style.pageTitle}>... a new page for component testing</h6>
            <BootstrapPage />
        </div>
    )
}

export default testing
