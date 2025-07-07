'use client';
import Favorites from '../favorites/page';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'MovieScape', href: '/moviescope' },
    { name: 'Favorites', href: '/favorites' },
  ];

  return (
    <nav className="bg-#302f2f text-white py-4 flex items-center">
      <h1 className="text-xl font-bold">🎬 MovieScape</h1>
      <div className="flex gap-4 ml-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'hover:text-blue-400 transition-colors',
              pathname === link.href && 'text-blue-400 font-semibold'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
