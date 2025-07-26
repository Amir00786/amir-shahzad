
export const Projects = () => {
    return (
        <div className='md:py-12 sm:py-8 py-4'>
            <h1 className="text-4xl md:text-5xl mb-16 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]" data-aos="fade-up" data-aos-duration="2000">
                My Work
            </h1>
            <div className='flex gap-y-6 flex-wrap -mx-3'>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-up" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-right" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="fade-left" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="flip-left" data-aos-duration="1000">
                    <div className='bg-white rounded-2xl p-6'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-orange-500 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 sm:w-1/2 w-full px-3' data-aos="flip-right" data-aos-duration="1000">
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