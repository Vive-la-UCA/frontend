import CardResumeDashboard from '@/components/Cards/CardResumeDashboard'
import UserCard from '@/components/Cards/UserCard'
import RuteCard from '@/components/Cards/RuteCardDashboard'
import { Suspense } from 'react'
import { UserCardContainer } from '@/components/Cards/UserCardContainer'
import { Route } from 'react-router-dom'
import { RouteCardContainerDashboard } from '@/components/Cards/RouteCardContainerDashboard'

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="flex flex-row gap-5 my-6">
        <Suspense fallback="Cargando">
          <CardResumeDashboard />
        </Suspense>
      </div>

      <div className="border-box flex flex-row gap-5">
        <div className="w-1/2 pr-2">
          <h1 className="text-xl font-semibold my-4">Rutas populares</h1>
          <RouteCardContainerDashboard />
        </div>

        <div className="w-1/2 pr-2">
          <h2 className="text-xl font-semibold my-4">
            Usuarios con mas insignias
          </h2>
          <UserCardContainer />
        </div>
      </div>
    </>
  )
}
