import React from 'react'

function userTable({dataApi}) {
  return (
    <div className="overflow-x-auto">

        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th>email</th>
            
            
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
                    
                            <div>
                                <div className="font-bold">  {user.email}</div>
                              
                            </div>
                        </div>
                    </td>
                    
                </tr>
            ))}

            </tbody>
            {/* foot */}
         
            
        </table>
    </div>
  )
}

export default userTable