"use client" 
import React,{useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSearchParams, useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { signIn } from "next-auth/react";
import { AuthTokenResponse } from "@supabase/supabase-js";
type LoginFormInputs = {
  email: string;
  password: string;
};

import type { Session } from '@supabase/auth-helpers-nextjs'
import { loginWithEmailAndPassword } from '@/lib/auth/login';

function LoginForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {

      // Call your authentication function (signIn) with the form data
      // await signIn();
      // const res = await signIn('credentials', {
      //   redirect: false,
      //   email:data.email,password: data.password
      // });
      // let email=data.email
      // let password=data.password
      // console.log(data.email)
      // console.log(data.password)
    //  const res =  await supabase.auth.signInWithPassword({
    //     // email:data.email,
    //     // password: data.password,
    //     email,
    //     password,
    //   })
      // let data = { email,
      //   password}

      const res= JSON.parse(
				await loginWithEmailAndPassword(data)
			) as AuthTokenResponse;

			if (res.error) {
			
        if (res.error) setError(res.error.message);
			} else {
        router.push('/dashboard');
			}
   
     
  }
  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3200/dashboard'
      }
  
    },)
    // if(data){
    //   router.push('/dashboard');
    // }
    // console.log("data github",error)
  }

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        {error &&
         <div  className="mt-2 alert alert-error">
            
            {error}
          </div>
        }
       
      
      
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              {...register('email', { required: 'Email is required' })}
              placeholder="email"
              className="w-full input input-bordered input-primary"
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forgot Password?
          </a> */}
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
           
          
          </div>
          <div>
            <button type="button"onClick={signInWithGithub} className="btn btn-primary">
              Login GIthub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;