import React from 'react'

function Column() {
    const items = [
        {
            'id':1,
            'title':'Kunal'
        },
        {
            'id':2,
            'title':'Kunal1'
        },
    ]
    return (
        <>
            {
                
                items.map( item => (
                    <>
                        <td>{item.title}</td>
                       
                    </>
                )
                )
            }
           
        </>
    )
}

export default Column
