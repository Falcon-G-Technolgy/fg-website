import { BsCalendar } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'

export default function FeaturesSection() {
  const features = [
    {
      icon: <BsCalendar className="h-6 w-6 text-white" />,
      title: "La ponctualité",
      description: "Nous finalisons vos projets dans le respect des deadlines"
    },
    {
      title: "Le professionalisme",
      description: "Nous usons des meilleures pratiques et technologies afin de vous garantir un résultat à la hauteur de vos attentes."
    },
    {
      icon: <FaRegLightbulb className="h-6 w-6 text-white" />,
      title: "L'innovation",
      description: "Créer des solutions répondant à des besoins réels"
    }
  ]

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-lg bg-zinc-900 p-6">
              <div className="flex items-center gap-2">
                {index === 1 ? (
                  <div className="flex h-10 w-16 items-center justify-center rounded bg-white">
                    <span className="text-sm font-bold text-black">PRO</span>
                  </div>
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

