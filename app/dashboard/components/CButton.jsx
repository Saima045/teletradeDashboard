
"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const CButton = ({ content }) => {
    const { pending } = useFormStatus()

    return (
        <>
            <button disabled={pending} className={`w-full text-center rounded-md font-bold bg-green-500 p-5 ${pending && 'bg-green-900'}`}>
                {pending ? (
                    <h4>
                        Adding...
                    </h4>
                ) : (content)}
            </button>
        </>
    )
}

export default CButton