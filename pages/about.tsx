import { getSession, signIn } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
function about() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, [])
  if (loading) {
    return <h2>loading...</h2>
  }
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div>In About page</div>
      </div>
    </>
  )
}

export default about
