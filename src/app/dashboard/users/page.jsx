'use client'

import { GetUsers } from '@/services/data/userService'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    async function fetchUsers() {
      const users = await GetUsers()
      console.log(users)
    }
    fetchUsers()
  }, [])

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Usuarios</h1>
      </div>
    </>
  )
}
