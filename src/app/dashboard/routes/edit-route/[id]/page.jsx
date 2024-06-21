'use client'
import { getOneRoute, updateRoute } from '@/services/data/Routes.service'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { getOneLocation } from '@/services/data/Location.service'
import RouteValidator from '@/app/validations/routeValidator'
import 'react-toastify/dist/ReactToastify.css'
import InputText from '@/components/Inputs/input-text'
import ImageUpload from '@/components/Inputs/ImageUpload'
import { TextArea } from '@/components/Inputs/TextArea'
import { Dropdown } from '@/components/Inputs/Dropdown'

export default function Page({ params }) {
  const router = useRouter()

  //Define the state of the form
  const [formRoute, setFormRoute] = useState({
    uid: params.id,
    name: '',
    image: null,
    locations: []
  })

  //get the route data
  useEffect(() => {
    async function fetchData() {
      const response = await getOneRoute(params.id)
      const selectedLocationsFetch = await Promise.all(
        response.locations.map(async location => {
          const locationData = await getOneLocation(location._id)
          return locationData
        })
      )

      setFormRoute({
        uid: params.id,
        name: response.name,
        description: response.description,
        image: response.image,
        locations: selectedLocationsFetch
      })
    }
    fetchData()
  }, [])

  const getNameHandler = e => {
    setFormRoute(prevState => ({ ...prevState, name: e.target.value }))
  }

  const getDescriptionHandler = e => {
    setFormRoute(prevState => ({ ...prevState, description: e.target.value }))
  }

  const getSelectedLocationHandler = location => {
    setFormRoute(prevState => ({
      ...prevState,
      locations: [...prevState.locations, location]
    }))
  }

  const getImageFileHandler = file => {
    setFormRoute(prevState => ({ ...prevState, image: file }))
  }

  const removeLocationFromFormRoute = location => {
    const newLocations = formRoute.locations.filter(
      loc => loc.uid !== location.uid
    )
    setFormRoute(prevState => ({
      ...prevState,
      locations: newLocations
    }))
  }

  const submitEditRoute = async e => {
    e.preventDefault()
    const validate = RouteValidator(formRoute)

    if (validate.status == false) {
      toast.info(validate.message)
      return
    }

    const response = await updateRoute(formRoute)
    if (response) {
      toast.success('Ruta editada con exito')
      //3 segundos despues redirecciona
      setTimeout(() => {
        router.push('/dashboard/routes')
      }, 2000)
    } else {
      toast.error('Error al crear la ruta')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Editar ruta</h1>
      <hr />
      <ToastContainer />

      <form onSubmit={submitEditRoute}>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col w-1/2">
            <InputText
              title={'Nombre'}
              onChange={getNameHandler}
              value={formRoute.name}
            />
            <TextArea
              title={'Descripción'}
              onChange={getDescriptionHandler}
              value={formRoute.description}
            />
            <Dropdown
              title={'Localidades'}
              onClickDropwdown={getSelectedLocationHandler}
              values={formRoute.locations}
              onRemoveLocation={removeLocationFromFormRoute}
            />
          </div>
          <ImageUpload
            onSelectedFile={getImageFileHandler}
            previewImageEdit={formRoute.image}
          />
        </div>

        <div className="flex flex-row justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5"
          >
            Actualizar ruta
          </button>
        </div>
      </form>
    </div>
  )
}
