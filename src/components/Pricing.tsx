import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    { name: "Básico", price: "R$ 29,99", features: ["Treinos personalizados", "Acompanhamento de progresso"] },
    { name: "Premium", price: "R$ 59,99", features: ["Tudo do Básico", "Planos de refeição", "Coaching virtual semanal"] },
    { name: "Elite", price: "R$ 99,99", features: ["Tudo do Premium", "Coaching virtual ilimitado", "Acesso prioritário a novos recursos"] },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/mês</span></p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>Escolher Plano</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}