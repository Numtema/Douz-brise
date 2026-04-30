import Image from 'next/image';

export function Workshops() {
  const steps = [
    "Choisir le contenant",
    "Choisir la base végétale",
    "Sélectionner les fruits",
    "Mixer",
    "Ajouter toppings et garniture",
    "Déguster"
  ];

  return (
    <section id="ateliers" className="py-24 bg-green-deep text-cream-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-light font-bold uppercase tracking-wider text-sm mb-4 block">Nos ateliers</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Créez votre boisson <span className="font-script font-normal text-green-light text-6xl sm:text-7xl lg:text-8xl inline-block mt-2">signature.</span>
            </h2>
            <p className="text-lg text-cream mb-6 leading-relaxed opacity-90">
              Une activité originale, saine, conviviale et photogénique. Parfaite pour les enterrements de vie de jeune fille (EVJF), les anniversaires, ou les animations d'équipe.
            </p>
            
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-10 backdrop-blur-sm">
              <p className="text-sm text-cream-soft mb-3"><strong className="text-white font-serif text-lg tracking-wide uppercase block mb-1">Disponibilités</strong> Mercredi, Vendredi, Samedi et Dimanche.</p>
              <p className="text-sm text-cream-soft"><strong className="text-white font-serif text-lg tracking-wide uppercase block mb-1">Tarif</strong> de 15€ à 25€ par personne selon la formule.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-green-brand flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <span className="font-medium text-sm sm:text-base">{step}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-green-light text-green-deep rounded-full px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors"
            >
              Organiser un atelier
            </a>
          </div>

          <div className="relative h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden">
            <Image
              src="/assets/workshops-douz-brise.png"
              alt="Atelier smoothie Dou'z Brise"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
