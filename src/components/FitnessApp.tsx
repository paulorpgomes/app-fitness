import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Pricing from './Pricing'
import WorkoutDisplay from './WorkoutDisplay'
import Footer from './Footer'

// Define an interface for the workout
interface Workout {
  exercise: string;
  sets: number;
  reps?: number; // Optional property
  duration?: string; // Optional property for exercises like planks
}

// Define an interface for the user
interface User {
  name: string;
  plan: string;
  workout: Workout[];
}

export default function FitnessApp() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // Simula um login de usuário
  const handleLogin = () => {
    setCurrentUser({
      name: "João Silva",
      plan: "premium",
      workout: [
        { exercise: "Agachamento", sets: 3, reps: 12 },
        { exercise: "Supino", sets: 3, reps: 10 },
        { exercise: "Remada", sets: 3, reps: 10 },
        { exercise: "Elevação lateral", sets: 3, reps: 12 },
        { exercise: "Prancha", sets: 3, duration: "30 segundos" }
      ]
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentUser={currentUser} onLogin={handleLogin} />
      <Hero />
      <Features />
      <Pricing />
      {currentUser && <WorkoutDisplay workout={currentUser.workout} />}
      <Footer />
    </div>
  )
}
