import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListItem = ({ item, remove, editData }) => {
    return (
        <li className='relative border border-gray-200 rounded-lg p-4 sm:p-6 my-2'>
            <p className='text-gray-400 text-xs sm:text-sm'>ID : {item.id}</p>

            <h2 className='text-lg sm:text-2xl font-semibold my-2 break-words'>{item.text}</h2>
            <h1
                className={`text-2xl sm:text-4xl font-bold ${
                    item.typeOfMoney === "Income" ? "text-green-500" : "text-red-500"
                }`}
            >
                {item.typeOfMoney === "Income" ? `+₹${item.money}` : `-₹${item.money}`}
            </h1>

            <span className='absolute top-3 right-3 flex space-x-2'>
                <button
                onClick={() => editData(item)}
                    className='bg-yellow-500 p-2 rounded-md text-xs sm:text-sm text-white cursor-pointer hover:bg-yellow-700'
                >
                    <FaEdit />
                </button>
                <button
                    onClick={() => remove(item.id)}
                    className='bg-red-500 p-2 rounded-md text-xs sm:text-sm text-white cursor-pointer hover:bg-red-700'
                >
                    <FaTrash />
                </button>
            </span>
        </li>
    )
}

export default ListItem
