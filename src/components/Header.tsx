import { Button } from "@/components/ui/button"

interface User {
  name: string;
}

interface HeaderProps {
  currentUser: User | null; // Assuming currentUser can be an object or null
  onLogin: () => void; // onLogin is a function with no parameters
}

export default function Header({ currentUser, onLogin }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">FitApp</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Recursos</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Preços</a></li>
            {currentUser ? (
              <li><span className="text-green-600">Olá, {currentUser.name}</span></li>
            ) : (
              <li><Button onClick={onLogin}>Login</Button></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
