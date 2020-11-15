import TestComponent from 'components/TestComponent'
import React from 'react'
import { withApolloHOC } from 'lib/apollo'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <div>
      <TestComponent />
      <Link href={'/'}>
        <a>main</a>
      </Link>
    </div>
  )
}

export default withApolloHOC({ ssr: true })(UsersPage)
