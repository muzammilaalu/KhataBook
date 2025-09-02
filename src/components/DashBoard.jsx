import React from 'react'

const DashBoard = ({ data }) => {

    const income = data
        .filter(item => item.typeOfMoney === "Income")
        .reduce((acc, curr) => acc + curr.money, 0)

    const expense = data
        .filter(item => item.typeOfMoney === "Expense")
        .reduce((acc, curr) => acc + curr.money, 0)

    const balance = income - expense

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
            <div className='bg-green-100 p-4 sm:p-6 rounded-lg shadow text-center'>
                <h2 className='text-lg sm:text-xl font-bold text-green-700'>Income</h2>
                <p className='text-xl sm:text-2xl font-semibold text-green-600'>+₹{income}</p>
            </div>
            <div className='bg-red-100 p-4 sm:p-6 rounded-lg shadow text-center'>
                <h2 className='text-lg sm:text-xl font-bold text-red-700'>Expense</h2>
                <p className='text-xl sm:text-2xl font-semibold text-red-600'>-₹{expense}</p>
            </div>
            <div className='bg-blue-100 p-4 sm:p-6 rounded-lg shadow text-center'>
                <h2 className='text-lg sm:text-xl font-bold text-blue-700'>Balance</h2>
                <p className='text-xl sm:text-2xl font-semibold text-blue-600'>₹{balance}</p>
            </div>
        </div>
    )
}

export default DashBoard
