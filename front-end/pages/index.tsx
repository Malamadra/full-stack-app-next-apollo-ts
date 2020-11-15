import React from 'react'
import TestComponent from '@/components/TestComponent.tsx'
import { withApolloHOC } from 'lib/apollo'
import Link from 'next/link'

const Home = () => {
    return (
    <div>
      <TestComponent />
      <Link href={'/users'}>
          <a>users</a>
      </Link>
    </div>
  )
}

export default withApolloHOC({ ssr: true })(Home)
