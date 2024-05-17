import React from 'react';

{/* navy blue - 5363B7
    purple - 6F5CE0
    light yellow - F3EED9
*/}

function ResourcesTable({ header, resource }) {
  const ResourceRows = resource?.map((resource) => {
    return (
      <tr key={resource.link} className="bg-white border-b">
        <th scope="row" className="py-4 pl-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap">
          <a href={resource.link} className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
            {resource.source}
          </a>
        </th>
        <td className="py-4 px-6">
          <a href={resource.link} className='font-medium text-[#2563eb]'> {resource.title} </a>
        </td>
        <td className="py-4 px-6 text-gray-600">
          {resource.description}
        </td>
      </tr>
    )
  });

  return (
    <div className='font-poppins'>
      <h1 className='font-semibold text-gray-700 text-[1.8rem] mb-5'>
        {header}
      </h1>
      <div className="font-poppins font-medium overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 text-sm font-medium text-gray-600 bg-gray-200 border-b-[1px] border-gray-300">
                RESOURCES
              </th>
              <th scope="col" className="py-3 px-6 text-gray-600 bg-gray-200 border-b-[1px] border-gray-300">
              </th>
              <th scope="col" className="py-3 px-6 text-gray-600 bg-gray-200 border-b-[1px] border-gray-300">
              </th>
            </tr>
          </thead>
          <tbody>
            {ResourceRows}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResourcesTable;
