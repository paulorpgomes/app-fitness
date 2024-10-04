import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Treinamento Personalizado na Palma da Sua Mão</h2>
        <p className="text-xl mb-8">Alcance seus objetivos de fitness com planos personalizados e acompanhamento de especialistas.</p>
        <Button size="lg" variant="secondary">Comece Agora</Button>
      </div>
    </section>
  )
}