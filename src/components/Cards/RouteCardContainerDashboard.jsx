'use client'

import { getAllBadgesWithoutPag } from '@/services/data/Badge.service'
import { getRoutesWithoutPag } from '@/services/data/Routes.service'
import { GetUsers } from '@/services/data/userService'
import { useEffect, useState } from 'react'
import RuteCard from './RuteCardDashboard'

export const RouteCardContainerDashboard = () => {
  const [topRoutes, setTopRoutes] = useState([])

  const fetchUsers = async () => {
    const response = await GetUsers()
    return response
  }

  const fetchBadges = async () => {
    const response = await getAllBadgesWithoutPag()
    return response
  }

  const fetchRoutes = async () => {
    const response = await getRoutesWithoutPag()
    return response
  }

  useEffect(() => {
    const calculateTopRoutes = async () => {
      const users = await fetchUsers()
      const badges = await fetchBadges()
      const routes = await fetchRoutes()

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

      // Sort routes by badge count and get top three
      const sortedRoutes = Object.entries(routeCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 3)
        .map(([routeId]) => routes.find(route => route.uid === routeId))

      setTopRoutes(sortedRoutes)
    }

    calculateTopRoutes()
  }, [])

  return (
    <div>
      {topRoutes.map((route, index) => {
        return <RuteCard key={index} name={route.name} image={route.image} />
      })}
    </div>
  )
}
