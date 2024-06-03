'use client'
import BadgeCard from '@/components/Cards/BadgeCard'
import SearchBar from '@/components/Inputs/SearchBar'
import { useState, useEffect } from 'react'
import { getAllBadges } from '@/services/data/Badge.service'
import PrincipalButton from '@/components/buttons/principal-button'
import { IoIosAddCircle } from 'react-icons/io'
import { Pagination } from '@/components/Inputs/Pagination'
import { deleteBadge } from '@/services/data/Badge.service'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Page() {
  const [badges, setBadges] = useState([])
  const [totalBadges, setTotalBadges] = useState(0) // Total number of routes
  const limit = 10 // Number of routes per page
  const [page, setPage] = useState(0) // Current page

  useEffect(() => {
    async function fetchBadges() {
      const badges = await getAllBadges({ page })
      setBadges(badges.data.badges)
      setTotalBadges(badges.data.total)
    }
    fetchBadges()
  }, [page])

  const onDeleteBadge = async badgeId => {
    try {
      const deleteResponse = await deleteBadge(badgeId)

      if (deleteResponse.status && deleteResponse.status === 200) {
        setBadges(badges.filter(badge => badge.uid !== badgeId))
        toast.success('La insignia ha sido eliminada')
      } else if (
        deleteResponse.response &&
        deleteResponse.response.status === 400
      ) {
        toast.info(deleteResponse.response.data.msg)
      }
    } catch (error) {
      console.log(error)
      toast.info(error)
    }
  }

  function onStepped(page) {
    setPage(page)
  }

  return (
    <div>
      <div className="mx-10">
        <h1 className="text-3xl font-semibold mb-4">Insignias</h1>
        <div className="flex pt-2 flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton
            link="/dashboard/badges/create-badge"
            text={'Crear Insignia'}
            type={'button'}
            Icon={<IoIosAddCircle size={25} />}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-10 mx-10">
        {badges.map(badge => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            onDeleteBadge={onDeleteBadge}
          />
        ))}
      </div>
      <div>
        <Pagination
          onStepped={onStepped}
          totalElements={totalBadges}
          limit={limit}
        />
      </div>
      <ToastContainer />
    </div>
  )
}
