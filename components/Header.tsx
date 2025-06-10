'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">AI Training</Link>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link 
              href="/tutorials" 
              className={`hover:text-blue-600 ${pathname === '/tutorials' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Tutorials
            </Link>
          </li>
          <li>
            <Link 
              href="/articles" 
              className={`hover:text-blue-600 ${pathname === '/articles' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link 
              href="/create-model" 
              className={`hover:text-blue-600 ${pathname === '/create-model' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Create Model
            </Link>
          </li>
        </ul>
        <div className="space-x-2 mt-4 md:mt-0">
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button onClick={logout}>Sign Out</Button>
            </div>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

