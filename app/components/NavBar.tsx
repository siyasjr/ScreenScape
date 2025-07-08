import React from 'react'
import Link from 'next/link'

const NavBar  = () => {
  return (
   <div className="navbar bg-base-200 shadow-lg flex justify-between px-10">
    

<Link className="btn btn-ghost text-xl" href={'/'}>MovieScape</Link>
<Link className='text-lg' href={'/favorites'}> Favorites</Link>

  
</div>
  )
}

export default NavBar

