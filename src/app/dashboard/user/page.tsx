import React from 'react'
import axios,{ AxiosInstance, AxiosRequestConfig } from 'axios';
import UserTable from "@/app/dashboard/user/UserTable"
import { readUserSession } from "@/lib/auth/session";
import { axiosCustom } from '@/lib/api/axiosCustom';
// import { axiosCustom } from "@/lib/api/axiosCustom"


async  function page() {
  const { data: userSession } = await readUserSession();
   try{
      const dataApi = await getData()
      if (dataApi) {
        // This will activate the closest `error.js` Error Boundary
        return (
          <div>
              <UserTable dataApi={dataApi}></UserTable>
          </div>
          
        )
      }else{
        return (
          <div>
              {JSON.stringify(dataApi)}
          </div>
        )
      }
     
    } catch (error) {
      let message = error?.message
      return(
        <div>
     
            {message}
              
          
        </div>
      )
    }
     
      // Handle errors here
    // console.error('Error fetching data:', error);
      // You can also throw the error if you want to propagate it further
    // throw error;
}


async function getData() {
  const { data: userSession } = await readUserSession();
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
    const config = {
      headers: {
        Authorization: `Bearer ${userSession?.session?.access_token}`,
      },
    };
    //const response = await axios.get(process?.env?.NEXT_PUBLIC_API_ADMIN+'/api/user',config);
    // const response = await axiosCustom()
    const apiInstance = await axiosCustom();
    const response = await apiInstance.get(process?.env?.NEXT_PUBLIC_API_ADMIN + '/api/user', config);

    // const response = await axios.create({
    //     headers: {

    //       'Authorization': `Bearer ${userSession?.session?.access_token}`, // Replace with your authorization token
    //     },
    //   }
     
    // ).get( process?.env?.NEXT_PUBLIC_API_ADMIN+'/api/user',); 
    //axiosCustom.get(,config);

    return response.data;
}




export default page