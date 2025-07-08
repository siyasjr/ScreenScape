"use client"

import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const NavBar = () => {
  const { data: session } = useSession()

  return (
    <div className="navbar bg-base-300 rounded-xl shadow-md my-4 px-4 sm:px-8">
      <Link className="btn btn-ghost text-xl" href={'/'}>
        MovieScape
      </Link>

      <div className="flex items-center gap-3 ml-auto">
        <Link className=" text-md hidden sm:inline" href={'/favorites'}>
          FAV
        </Link>

        {session ? (
          <>
            <span className="hidden sm:inline text-sm ">
              Hi, {session.user?.name}
            </span>
            <button onClick={() => signOut()} className="btn btn-sm btn-error">
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={() => signIn('github')} className="btn btn-sm btn-success">
            Sign in with GitHub
          </button>
        )}
      </div>
    </div>
  )
}

export default NavBar
