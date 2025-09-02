import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({data, remove, editData}) => {
    return (
        <ul className='mt-8'>
            {
                data.map((item,index) =>(
                    <ListItem key={index} item = {item} remove = {remove} editData = {editData}/>
                ))
            }
        </ul>
    )
}

export default ListGroup
