'use client'

import { GetUsers } from '@/services/data/userService'
import { useEffect, useState } from 'react'
import { Table } from 'antd'

export const UserTable = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchUsers() {
      const users = await GetUsers()

      // if user role is ADMIN_ROLE set role to "Admin"
      users.forEach(user => {
        if (user.role === 'ADMIN_ROLE') {
          user.role = 'Administrador'
        }
      })

      // if user role is USER_ROLE set role to "Usuario"
      users.forEach(user => {
        if (user.role === 'USER_ROLE') {
          user.role = 'Usuario'
        }
      })

      // count id of the badges for each user and set the number according to the number of badges
      users.forEach(user => {
        const badges = user.badges.length
        user.badges = badges
      })

      setData(users)
    }
    fetchUsers()
  }, [])

  const usersData = data?.map(user => ({
    key: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    badges: user.badges
  }))

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'Insignias',
      dataIndex: 'badges',
      key: 'badges'
    }
  ]
  return (
    <Table
      dataSource={usersData}
      columns={columns}
      pagination={{ pageSize: 15 }}
    />
  )
}
