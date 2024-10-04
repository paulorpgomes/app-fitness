import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Define the interface for an exercise
interface Exercise {
  exercise: string;
  sets: number;
  reps?: number; // Optional, use `?` to denote it may not be present
  duration?: string; // Optional, use `?` to denote it may not be present
}

// Define the props for the WorkoutDisplay component
interface WorkoutDisplayProps {
  workout: Exercise[]; // An array of Exercise objects
}

export default function WorkoutDisplay({ workout }: WorkoutDisplayProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Seu Treino de Hoje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workout.map((exercise: Exercise, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exercise.exercise}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Séries: {exercise.sets}</p>
                <p>{exercise.reps ? `Repetições: ${exercise.reps}` : `Duração: ${exercise.duration}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
