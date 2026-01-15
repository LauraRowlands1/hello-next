'use client';
import Link from 'next/link';

const links= [
  { name: 'Home', href: '/blog/home' },
  { name: 'Travels', href: '/blog/travels' },
  { name: 'Login', href: '/blog/login' },
]

export default function TopNav() {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.href}>{link.name}</Link>
      ))}
    </div>
  )
}