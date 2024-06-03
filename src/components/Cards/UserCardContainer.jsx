'use client'

import { useEffect, useState } from 'react'
import { GetUsers } from '@/services/data/userService'
import UserCard from './UserCard'

export const UserCardContainer = () => {
  const [topThree, setTopThree] = useState([])

  const fetchUsers = async () => {
    const response = await GetUsers()

    const users = response.map(user => {
      return {
        name: user.name,
        email: user.email,
        badges: user.badges.length
      }
    })

    // filter the top three users with the most badges
    const topThree = users.sort((a, b) => b.badges - a.badges).slice(0, 3)

    setTopThree(topThree)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="p-2 rounded-lg">
      {topThree.map((user, index) => {
        return (
          <UserCard
            key={index}
            email={user.email}
            name={user.name}
            badgeCount={user.badges}
          />
        )
      })}
    </div>
  )
}
