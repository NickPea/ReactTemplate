import React, { useContext } from 'react'
import { AppContext } from "./context/appservice";

function MockConsumer() {
    const data = useContext(AppContext);

    return (
        <div>
            {data.someData}
        </div>
    )
}

export default MockConsumer
