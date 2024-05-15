'use client'

import {
  getAllLocations,
  getLocationsPag
} from '@/services/data/Location.service'
import { getAllRoutes } from '@/services/data/Routes.service'
import { GetUsers, GetUsersPag } from '@/services/data/userService'
import { useEffect, useState } from 'react'
//Este componente se encargara del fecha de la ruta y el numero a mostrar
import { CiLocationOn } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import { CiRoute } from 'react-icons/ci'

export default function CardResumeDashboard() {
  const [totalRoutes, setTotalRoutes] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalLocations, setTotalLocations] = useState(0)

  const fetchRoutes = async () => {
    const { data } = await getAllRoutes(0)
    setTotalRoutes(data.total)
  }

  const fetchUsers = async () => {
    const { data } = await GetUsersPag(0)
    setTotalUsers(data.total)
  }

  const fetchLocations = async () => {
    const { data } = await getLocationsPag(0)
    setTotalLocations(data.total)
  }

  useEffect(() => {
    fetchRoutes()
    fetchUsers()
    fetchLocations()
  }, [])

  const CardResumeData = [
    { routeName: 'Rutas', number: totalRoutes, icon: CiRoute },
    { routeName: 'Usuarios', number: totalUsers, icon: CiUser },
    { routeName: 'Localidades', number: totalLocations, icon: CiLocationOn }
  ]

  return (
    <>
      {CardResumeData.map((data, index) => {
        return (
          <div
            key={index}
            className="w-1/3 bg-white p-4 rounded-md shadow-md relative overflow-hidden"
          >
            <h2 className="text-md text-gray-900 font-semibold mb-2">
              {data.routeName}
            </h2>
            <p className="text-4xl text-yellow-badge font-bold">
              {data.number}
            </p>
            <div className="absolute top-0 -right-10 text-gray-100">
              <data.icon size={130} />
            </div>
          </div>
        )
      })}
    </>
  )
}
