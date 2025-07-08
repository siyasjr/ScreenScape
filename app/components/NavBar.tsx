import React from 'react'
import Link from 'next/link'

const NavBar  = () => {
  return (
   <div className="navbar bg-base-300 shadow-lg flex justify-between px-10">
    

<Link className="btn btn-ghost text-xl" href={'/'}>MovieScape</Link>

<div>
  <Link className="btn btn-ghost text-lg" href={'/favorites'}>About </Link>
<Link className="btn btn-ghost text-lg" href={'/favorites'}>FAV </Link>
 </div>




  
</div>
  )
}

export default NavBar

