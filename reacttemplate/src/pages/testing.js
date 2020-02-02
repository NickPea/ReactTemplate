import React from 'react'
import OurWeddingContainer from '../containers/ourweddingcontainer'
import style from "./testing.module.css"

function testing() {
    return (
        <div className={style.pageWrapper}>
            <h6 className={style.pageTitle}>... a new page for component testing</h6>
            <OurWeddingContainer />
        </div>
    )
}

export default testing
