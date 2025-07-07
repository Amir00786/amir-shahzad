import React from 'react'

export const Projects = () => {
    return (
        <div className='md:py-20 sm:py-12 py-8'>
            <div className='flex md:mb-16 sm:mb-12 mb-8 flex-col gap-2 md:gap-4 items-center justify-center'>
                <span className='text-white uppercase font-medium md:text-xl text-sm sm:text-base md:tracking-wider'>
                    My Recent
                </span>
                <strong className='sm:text-4xl text-3xl md:text-5xl font-semibold text-stroke text-orange-500'>
                    Projects
                </strong>
            </div>
            <div className='flex gap-y-6 flex-wrap -mx-3'>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3'>
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}