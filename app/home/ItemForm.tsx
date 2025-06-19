'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { Item } from '@/app/data/db'
import { createItem } from './actions'

 
const ItemForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Item>({
        defaultValues: {
            type: 'event',
            message: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);

        createItem(data.type, data.message);

        reset(); 
        
    };

    return (
        <div className='my-4'>
            <div>ItemForm</div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-200">Type</label>
                    <input
                        id="type"
                        {...register('type', { required: 'Type is required' })}
                        className={`mt-1 block w-full bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400 ${errors.type ? 'border-red-500' : ''}`}
                    />
                    {errors.type && <p className="text-red-400 text-sm mt-1">{errors.type.message}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                    <textarea
                        id="message"
                        autoFocus
                        {...register('message', { required: 'Message is required' })}
                        className={`p-2 mt-1 block w-full bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ItemForm