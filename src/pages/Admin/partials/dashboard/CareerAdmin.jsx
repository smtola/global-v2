import React from 'react'

const CareerAdmin = () => {
  return (
    <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
    {/* Chart built with Chart.js 3 */}
    <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      {/* Change the height attribute to adjust the chart height */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Discriptions
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Images
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default CareerAdmin