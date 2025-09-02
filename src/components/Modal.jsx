import { useEffect, useState } from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Modal = ({ addData, isVisible, setIsVisible, edit, updateData }) => {


    const [text, setText] = useState("")
    const [money, setMoney] = useState("")
    const [typeMoney, setTypeMoney] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!edit.isEdit) {
            addData(text, money, typeMoney)
        } else {
            updateData({
                id: edit.transaction.id,
                text,
                money: Number(money),
                typeOfMoney: typeMoney
            })
        }
        setText("")
        setMoney("")
        setTypeMoney("")
        setIsVisible(false)
    }


    useEffect(() => {
        if (edit.isEdit) {
            setText(edit.transaction.text)
            setMoney(edit.transaction.money)
            setTypeMoney(edit.transaction.typeOfMoney)
        }
    }, [edit])


    return (
        <>
            <div
                className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-40 transition-all duration-300 ${isVisible ? "block" : "hidden"
                    }`}
            >
                <div className="relative bg-white p-6 rounded-lg w-96 shadow-lg">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                    >
                        <IoClose size={24} />
                    </button>

                    <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                            className='border border-gray-400 w-full my-2 rounded-md p-2'
                            type="number"
                            placeholder='Enter Amount' required
                        />
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className='border border-gray-400 w-full my-2 rounded-md p-2'
                            type="text"
                            placeholder='Enter Transaction' required
                        />
                        <select value={typeMoney} required onChange={(e) => setTypeMoney(e.target.value)} className=' my-2 w-full p-2.5 rounded-md border border-gray-400 '>
                            <option value="">Select Type</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <button
                            type="submit"
                            className='bg-green-500 my-2 w-full p-2.5 rounded-md text-white font-bold hover:bg-green-600 cursor-pointer'
                        >
                            Save Transaction
                        </button>
                    </form>
                </div>
            </div>
            <button
                onClick={() => setIsVisible(!isVisible)}
                className='fixed right-5 bottom-5 cursor-pointer hover:bg-emerald-600 bg-emerald-500 h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg z-50'
            >
                <FaMoneyBill />
            </button>
        </>
    )
}

export default Modal
