/* eslint-disable react/prop-types */


const Details = ({ data, type }) => {



    return (
        <div className='py-10 lg:px-16'>
            <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="" className='w-[90%] md:w-[50%] lg:w-[80%]' />
                </div>
                <div className="lg:w-[50%]">
                    <div>
                        <div>
                            <p className='font-poppins text-white font-bold text-3xl'>{data?.original_title}</p>
                            <div className='flex gap-6 py-2'>
                                {type == "movie" && <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className='text-gray-400'>{data?.runtime}mins</p>
                                </div>}
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <p className='text-yellow-400'>{data?.vote_average}</p>
                                </div>
                            </div>
                            <p className='text-white'>
                                {data?.overview}
                            </p>
                        </div>
                    </div>

                    <div className="py-5">
                        <button className='px-6 py-3 bg-[#FDE047] font-medium text-[#1A242D] rounded-xl hover:bg-[#1A242D] hover:text-[#FDE047]'>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details