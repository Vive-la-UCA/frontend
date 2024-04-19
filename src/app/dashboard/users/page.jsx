import { UserTable } from '@/components/users/UserTable'

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Usuarios</h1>
      </div>
      <div>
        <UserTable />
      </div>
    </>
  )
}
