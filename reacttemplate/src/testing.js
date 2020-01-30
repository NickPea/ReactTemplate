import React from 'react'
import BootstrapPage from "./showbootstrap";
import style from "./testing.module.css"
import MockConsumer from './mockConsumer';

function testing() {
    return (
        <div className={style.pageWrapper}>
            <h6 className={style.pageTitle}>... a new page for component testing</h6>
            <MockConsumer />
            <BootstrapPage />
        </div>
    )
}

export default testing
