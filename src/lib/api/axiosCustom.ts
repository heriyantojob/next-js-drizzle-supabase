import { readUserSession } from "@/lib/auth/session";
import axios,{ AxiosInstance, AxiosRequestConfig } from 'axios';


export async function axiosCustom(config?: AxiosRequestConfig): Promise<AxiosInstance> {
  const { data: userSession } = await readUserSession();
  const accessToken = userSession?.session?.access_token;

  const apiCustom: AxiosInstance = axios.create({
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (config) {
    return apiCustom(config);
  }

  return apiCustom;
}



  // export const axiosCustom = async () => {
  //   // You can perform any asynchronous setup here if needed
  
  //   // Create a custom Axios instance with specific configuration
  //   const customAxios = axios.create({
  //     baseURL: 'https://api.example.com', // Replace with your API base URL
  //     timeout: 5000, // Set timeout for requests in milliseconds
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your authorization token
  //     },
  //   });
  
  //   // You can also define request interceptors
   
  
 
  
  //   return customAxios;
  // };