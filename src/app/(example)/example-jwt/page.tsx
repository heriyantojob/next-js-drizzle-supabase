import React from 'react'
import { readUserSession } from "@/lib/auth/session";

async function page() {
  const { data: userSession } = await readUserSession();
  return (
    <div>{JSON.stringify(userSession)}</div>
  )
}

export default page