import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Kunal','Kunal','Kunal1','Kunal2']
    const person = [
        {
            id:1,
            name:'Kunal',
            age:'37',
            skills:'React'
        },
        {
            id:2,
            name:'Kunal1',
            age:'37',
            skills:'React1'
        },
        {
            id:3,
            name:'Kunal2',
            age:'37',
            skills:'React Native'
        },
        {
            id:4,
            name:'Kunal3',
            age:'37',
            skills:'Angular'
        },
        {
            id:5,
            name:'Kunal4',
            age:'37',
            skills:'Vue'
        }
    ]
const NameList =  names.map((name,index) => <h2 key={index}>{index} - {name}</h2>)
    return (
        <div>
            {NameList}
        </div>
    )
}

export default NameList
