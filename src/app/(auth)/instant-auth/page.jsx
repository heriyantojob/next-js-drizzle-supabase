

import LoginFormOauth from './LoginFormOauth'
//const supabase = createClient('<INSERT PROJECT URL>', '<INSERT PROJECT ANON API KEY>'


function page() {
    // const supabase = createClient(process.env.SUPABASE_API_URL, process.env.SUPABASE_ANON_KEY)
  return (
    <LoginFormOauth></LoginFormOauth>
  )
}

export default page