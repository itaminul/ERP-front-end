import React, { ReactNode, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Datepicker, Input, initTE } from "tw-elements";
interface FormData {
    departmentName: string,
    departmentDes: string,
    serialNo: 0,
    orgId: 0
}

interface onClose {
    onClose: () => void;
    children: ReactNode;
}

const CreateDept = (props: onClose) => {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const [formData, setFormData] = useState<FormData>({
        departmentName: '',
        departmentDes: '',
        serialNo: 0,
        orgId: 0
    })

    const [responseMessage, setResponseMessage] = useState<string | null>(null)

    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/department`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(formData)

            })

            if (response.ok) {
                setResponseMessage('Data saved successfully');
                setError(null)
                setTimeout(() => {
                    setResponseMessage(null)
                    props.onClose()
                }, 3000)

            } else {
                console.log("error")
                throw new Error('Network response was not ok')
            }
        } catch (error) {
            setResponseMessage(null);
            setError('Error saving data');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    {responseMessage && <p>{responseMessage}</p>}
                    {error && <p>{error}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Serial</label>
                    <input type="text" name="serialNo" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="departmentName" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label className="block text-left mb-2 text-sm  font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" name="departmentDes" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label className="block text-left mb-2 text-sm  font-medium text-gray-900 dark:text-white">Description</label>
                    <select name="orgId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Organization1</option>
                        <option value="2">Organization2</option>
                        <option value="3">Organization3</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default CreateDept;