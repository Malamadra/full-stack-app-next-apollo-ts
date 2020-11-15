import React, { ReactElement } from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

const USERS = gql`
  query users {
    users {
      data {
        id
        name
      }
    }
  }
`

const DataWrapper = styled('div')`
  color: red;
`

const TestComponent = () => {
  const { loading, error, data } = useQuery(USERS)

  console.log({
    data
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!!! {error}</div>
  }

  const {
    users: { data: usersList }
  } = data

  return (
    <DataWrapper>
      {usersList.map(({ id, name }: any) => (
        <div key={id}>{name}</div>
      ))}
    </DataWrapper>
  )
}

export default TestComponent
