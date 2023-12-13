'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();
  // const supabase = createClientComponentClient()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  useEffect(() => {
    
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
        if(event==="SIGNED_IN"){
          router.push('/dashboard');
        }
        // if(event==="S"){
        //   router.push('/dashboard');
        // }
      // alert(event)
      // if(event==="SIGNED_IN"){
      //   alert("sign In")
      // }else if(event==="SIGNED_OUT"){
      //   alert("sign Out")
      // }
      // setSession(currentSession);
      // setUser(currentSession?.user ?? null);
      
    });
    // ...
    return () => {
      authListener?.unsubscribe();
    };
    return () => {
      second
    }
  }, [])

  return(
    <Auth
      supabaseClient={supabase}

      appearance={{ theme: ThemeSupa }}
      
      showLinks={true}
      providers={["github"]}
      redirectTo={`http://localhost:3200/dashboard`}
    />
  )
}