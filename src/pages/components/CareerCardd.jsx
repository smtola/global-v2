import React from 'react'

const CareerCardd = ({img,title,dics}) => {
  return (
    <div class="max-w-xl lg:max-w-sm rounded-lg shadow bg-[#314bb2]">
        <img class="rounded-t-lg" src={img} alt="" />
        <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#ffffff]">{title}</h5>
        <p class="mb-3 font-normal text-[#eee] ">{dics}</p>
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply Now
            </button>
        </div>
    </div>
  )
}

export default CareerCardd