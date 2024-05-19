'use client'

import { getAllBadges } from '@/services/data/Badge.service'
import { getAllRoutes } from '@/services/data/Routes.service'
import { GetUsers } from '@/services/data/userService'
import { useEffect, useState } from 'react'
import RuteCard from './RuteCardDashboard'

export const RouteCardContainerDashboard = () => {
  const [topRoutes, setTopRoutes] = useState([])

  const fetchUsers = async () => {
    const response = await GetUsers()
    console.log(response)
    return response
  }

  const fetchBadges = async () => {
    const response = await getAllBadges()
    console.log(response)
    return response
  }

  const fetchRoutes = async () => {
    const response = await getAllRoutes(0)
    console.log(response.data)
    return response.data
  }

  useEffect(() => {
    const calculateTopRoutes = async () => {
      const users = await fetchUsers()
      console.log(users)
      const badges = await fetchBadges()
      console.log(badges)

      const { routes } = await fetchRoutes()
      console.log(routes)

      // Aggregate Badge data from users
      const badgeCounts = {}

      users.forEach(user => {
        user.badges.forEach(badgeId => {
          if (!badgeCounts[badgeId]) {
            badgeCounts[badgeId] = 0
          }
          badgeCounts[badgeId]++
        })
      })
        
        console.log(badgeCounts)

      // Map badge Ids to Route Ids and count occurrences
      const routeCounts = {}
      badges.forEach(badge => {
        const routeId = badge.route
        const count = badgeCounts[badge.uid] || 0
        if (!routeCounts[routeId]) {
          routeCounts[routeId] = 0
        }
        routeCounts[routeId] += count
      })
        
        console.log(routeCounts)

      // Sort routes by badge count and get top three
      const sortedRoutes = Object.entries(routeCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 3)
        .map(([routeId]) => routes.find(route => route.uid === routeId))

      setTopRoutes(sortedRoutes)
    }

    calculateTopRoutes()
  }, [])

  console.log(topRoutes)

  return (
    <div>
      {topRoutes.map((route, index) => {
        return <RuteCard key={index} name={route.name} image={route.image} />
      })}
    </div>
  )
}
