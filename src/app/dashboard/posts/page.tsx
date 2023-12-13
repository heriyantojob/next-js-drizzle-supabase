import React from 'react'
import axios from 'axios';
import UserTable from "@/app/dashboard/user/UserTable"
async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/api/posts');

    if (!response.data) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    // You can also throw the error if you want to propagate it further
    throw error;
  }
}
async  function page() {
  const dataApi = await getData()
  return (
    <div>
        <UserTable dataApi={dataApi}></UserTable>
    </div>
  )
}

export default page