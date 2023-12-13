import React from 'react'

function userTable({dataApi}) {
  return (
    <div className="overflow-x-auto">
        {JSON.stringify(dataApi)}
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}

            {dataApi?.data.map(user => (
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <th className="p-3">
                        <label>
                        <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <td className="p-3">
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <div>
                            {user.username}
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </div>
                    </td>
                    <td className="p-3">Purple</td>
                    <th className="p-3">
                        <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
            ))}

            </tbody>
            {/* foot */}
         
            
        </table>
    </div>
  )
}

export default userTable