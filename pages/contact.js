import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const contact = ({ data }) => {
  const { data: session } = useSession()
  console.log('session:', session)
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div>Contact us page, {data}</div>
      </div>
    </>
  )
}

export default contact

export async function getServerSideProps(context) {
  const session = await getSession(context)
  //secure pages on server side next-auth library...
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/contact`,
        permanent: false,
      },
    }
  }
  return {
    props: {
      session,
      data: session ? 'You are logged in contact us page' : 'logged out',
    },
  }
}
