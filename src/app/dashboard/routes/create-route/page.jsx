'use client'

import InputText from '@/components/Inputs/input-text'
import ImageUpload from '@/components/Inputs/ImageUpload'
import { Dropdown } from '@/components/Inputs/Dropdown'
import { createNewRoute } from '@/services/data/Routes.service'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'
import { TextArea } from '@/components/Inputs/TextArea'
import RouteValidator from '@/app/validations/routeValidator'

export default function Page() {
  const router = useRouter()

  let route = {
    name: '',
    description: '',
    image: null,
    locations: []
  }

  const getNameHandler = e => {
    route.name = e.target.value
  }

  const getDescriptionHandler = e => {
    route.description = e.target.value
  }

  const getSelectedLocationHandler = location => {
    route.locations = [...route.locations, location.uid]
  }

  const getImageFileHandler = file => {
    route.image = file
  }

  async function submitHandler(e) {
    e.preventDefault()

    const validator = new RouteValidator(route)

    if (validator.status === false) {
      toast.error(validator.message)
    } else {
      const response = await createNewRoute(route)
      if (response) {
        toast.success('Ruta creada con éxito')
        setTimeout(() => {
          router.push('/dashboard/routes')
        }, 2000)
      } else {
        toast.error('Error al crear la ruta')
      }
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Crear una ruta</h1>
      <hr />
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col w-1/2">
            <InputText title={'Nombre'} onChange={getNameHandler} />
            <TextArea title={'Descripción'} onChange={getDescriptionHandler} />
            <Dropdown
              title={'Localidades'}
              onClickDropwdown={getSelectedLocationHandler}
            />
          </div>
          <ImageUpload onSelectedFile={getImageFileHandler} />
        </div>

        <div className="flex flex-row mt-10 justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5"
          >
            Crear ruta
          </button>
        </div>
      </form>
    </div>
  )
}
