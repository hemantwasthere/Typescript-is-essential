import React from 'react'

type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

function PersonList({ names }: PersonListProps) {
    return (
        <div className='App'>
            {/* <h2>{names[0].first}  {names[0].last}</h2>
            <h2>{names[1].first}  {names[1].last}</h2>
            <h2>{names[2].first}  {names[2].last}</h2> */}

            {names.map((name, index) => {
                return <h2 key={index}>
                    {name.first} {name.last}
                </h2>
            })}
        </div>
    )
}

export default PersonList