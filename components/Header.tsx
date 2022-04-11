import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
function Header() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <>
      <header className="mx-auto flex max-w-7xl justify-between p-5 ">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-44 cursor-pointer object-contain"
              src="https://links.papareact.com/yvf"
              alt=""
            />
          </Link>
          <div className="hidden items-center space-x-5 md:inline-flex">
            <Link href="/about">
              <a>
                <h3>About</h3>
              </a>
            </Link>

            <Link href="/contact">
              <a>
                <h3>Contact</h3>
              </a>
            </Link>
            <h3 className="rounded-full bg-green-600 px-4 py-1 text-white ">
              Follow
            </h3>
          </div>
        </div>
        <div
          className={`flex items-center space-x-5 text-green-600 ${
            !session && loading
              ? 'delay-10 opacity-0 transition-all ease-in'
              : 'opacity-1 delay-10	transition-all ease-in'
          }`}
        >
          {!loading && !session && (
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                <h3>Sign In</h3>
              </a>
            </Link>
          )}
          {session && (
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                <h3>Sign out</h3>
              </a>
            </Link>
          )}

          <h3 className="rounded-full border px-4 py-1">Get Started</h3>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl justify-between p-5 ">
        <h1>{session ? `Welcome, ${session.user?.name}` : ''}</h1>
      </div>
    </>
  )
}

export default Header
