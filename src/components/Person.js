import React from 'react'

function Person({person, keys}) {
    return (
        <div>
            <h3>{keys} I am {person.name}. I am {person.age}. I know {person.skills}.</h3>
        </div>
    )
}

export default Person
