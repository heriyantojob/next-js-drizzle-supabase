

import React from 'react'
import { LogoutButton } from './LogoutButton'

async function AdminNavbar() { 

  
  return (
    <div className="navbar bg-base-100">
        
        <div className="flex-none">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div className="flex-none">
          
        </div>
     
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            {/* {getSession()} */}

          {/* <button onClick={clickLogout}>Logout</button> */}
          <LogoutButton></LogoutButton>
       
        </div>
    </div>
  )
}

export default AdminNavbar