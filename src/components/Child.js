import React from 'react'

const Child = ({ counterFunction }) => {

    return (
        <div>
            <button onClick={counterFunction}>Increment Value Button</button>
        </div>
    )
}

export default Child