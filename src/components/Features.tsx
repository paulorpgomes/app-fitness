import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dumbbell, Utensils, LineChart, Video } from "lucide-react"

export default function Features() {
  const features = [
    { icon: <Dumbbell className="h-6 w-6" />, title: "Treinos Personalizados", description: "Planos adaptados ao seu nível e objetivos" },
    { icon: <Utensils className="h-6 w-6" />, title: "Planos de Refeição", description: "Nutrição personalizada para complementar seu treino" },
    { icon: <LineChart className="h-6 w-6" />, title: "Acompanhamento de Progresso", description: "Veja seus resultados e mantenha-se motivado" },
    { icon: <Video className="h-6 w-6" />, title: "Coaching Virtual", description: "Sessões ao vivo com treinadores certificados" },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}