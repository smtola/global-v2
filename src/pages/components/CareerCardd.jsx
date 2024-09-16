import React from 'react'

const CareerCardd = ({img,title,dics,defaultLangCode,titleKh,descKh}) => {
  return (
    <div className="relative flex flex-col justify-end max-w-xl md:max-w-2xl xl:max-w-sm min-h-[20rem] rounded-lg overflow-hidden">
        <img className="rounded-t-lg absolute inset-0 w-full h-full object-center object-cover" src={img} alt="" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-5 relative flex flex-col justify-end">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ffffff]">{defaultLangCode === 'en' ? title : titleKh}</h5>
            <p className="mb-3 font-normal text-[#eee] ">{defaultLangCode === 'en' ? dics : descKh}</p>
            <a href="tel:+8556969666499" className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Apply Now
            </a>
        </div>
    </div>
  )
}

export default CareerCardd