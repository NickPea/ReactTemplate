import React from 'react'
import OurWedding from "../pages/ourwedding";
import style from "./testing.module.css"

function testing() {
    return (
        <div className={style.pageWrapper}>
            <h6 className={style.pageTitle}>... a new page for component testing</h6>
            <OurWedding />
        </div>
    )
}

export default testing
