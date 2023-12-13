import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import LoginForm from './LoginForm'



export default async function Login() {
  const supabase = createClientComponentClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <LoginForm session={session} />
}
