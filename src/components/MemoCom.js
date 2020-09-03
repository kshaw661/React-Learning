import React from 'react'

function MemoCom({name}) {
    console.log('Rendering Memo Properties')
    return (
        <>
           {name} 
        </>
    )
}

export default React.memo(MemoCom)
