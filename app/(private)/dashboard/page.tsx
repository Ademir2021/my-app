'use client'

import { TUser } from "@/app/models/TUser";
import { useEffect, useState } from "react";
import { getUser } from "@/app/lib/auth";

export default  function Dashboard() {

  const [user, setUser] = useState<TUser | null>(null)
      useEffect(() => {
          async function loadUser() {
              const user = await getUser()
              setUser(user)
          }
          loadUser()
      }, [])

  
  return <>
    {/* <pre>{JSON.stringify(user)}</pre> */}
    <h1>Dashboard</h1>
    <p>Bem Vindo: {user?.login}</p>
    </>
}