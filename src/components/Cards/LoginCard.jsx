'use client'
import { IoMailOutline } from 'react-icons/io5'
import { RxLockClosed } from 'react-icons/rx'
import { useState } from 'react'
import { Login } from '@/services/auth/authService'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const LoginCard = () => {
  const router = useRouter()

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = inputValues
    const { data, status } = await Login(email, password)

    setInputValues({
      email: '',
      password: ''
    })

    if (status !== 200) {
      if (data?.errors) {
        data.errors.forEach(error => {
          console.error(error)
          toast.error(error.error)
        })
        return
      }
      toast.error(data.error)
      return
    }

    sessionStorage.setItem('token', data.token)
    router.push('/dashboard ')
  }

  return (
    <form
      className=" flex flex-col gap-3 font-montserrat font-medium"
      onSubmit={handleSubmit}
    >
      <h1 className=" font-bold text-black text-center text-2xl pb-4 ">
        Iniciar sesión
      </h1>
      <div>
        <div className="text-lg xl:text-base text-primary">Email</div>
        <label className="relative block text-primary ">
          <span className="absolute inset-y-0 flex text-primary items-center">
            <IoMailOutline className="h-4 w-4 fill-background font-semibold" />
          </span>
          <input
            value={inputValues.email}
            onChange={handleInputChange}
            name="email"
            className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none"
            type="email"
            placeholder="Ingrese su dirección de correo electrónico"
          />
        </label>
      </div>

      <div>
        <div className="text-lg xl:text-base text-primary">Contraseña</div>
        <label className="relative block text-primary ">
          <span className="absolute inset-y-0 flex text-primary items-center">
            <RxLockClosed className="h-4 w-4 fill-background font-semibold" />
          </span>
          <input
            value={inputValues.password}
            onChange={handleInputChange}
            name="password"
            className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none"
            type="password"
            placeholder="Ingrese tu contraseña"
            required
          />
        </label>
      </div>

      <div>
        <div className="flex flex-row justify-between text-xs mt-8">
          <div className="inline-flex gap-x-1">
            <input className="w-3 y-3" type="checkbox" />
            <label className="text-black">Mantener sesión iniciada</label>
          </div>
        </div>

        <div className="flex justify-center text-white mt-10">
          <button
            type="submit"
            className="font-semibold text-white bg-primary py-2 px-4 rounded-2xl w-[50%] text-center"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginCard
