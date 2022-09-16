import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error' // union type of string literals, status value can be only one of these three
}

function Status({ status }: StatusProps) {
    return (
        <div className='App'>
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'success' && <h2>Data fetched successfully!</h2>}
            {status === 'error' && <h2>Error fetching data</h2>}
        </div>
    )
}

export default Status