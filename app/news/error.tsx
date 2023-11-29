'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center items-center bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-lg font-bold'>Easy, cowboy! We have an error here!</h2>
            <h2>There is a message for you</h2>
            <div className='bg-red-500 p-6 m-6 shadow-md rounded text-center'>
                {error.message}
            </div>
            <button className='bg-green-500 shadow-md rounded py-3 px-6 text-lg' onClick={() => reset()}>Try again</button>
        </div>
    )
}