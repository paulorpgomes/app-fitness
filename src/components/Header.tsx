'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from 'next/navigation'

interface User {
  name: string;
}

interface HeaderProps {
  currentUser: User | null;
}

export default function Header({ currentUser }: HeaderProps) {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')  // Redireciona para a página de login
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">SlimTrain</Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><Link href="#features" className="text-gray-600 hover:text-blue-600">Recursos</Link></li>
            <li><Link href="#pricing" className="text-gray-600 hover:text-blue-600">Preços</Link></li>
            {currentUser ? (
              <li><span className="text-green-600">Olá, {currentUser.name}</span></li>
            ) : (
              <li><Button onClick={handleLogin}>Login</Button></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
