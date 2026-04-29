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
            <span className="text-green-light font-bold uppercase tracking-wider text-sm mb-4 block">EVJF, EVJG & Événements familiaux</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Des ateliers créatifs qui font <span className="font-script font-normal text-green-light text-5xl sm:text-6xl inline-block mt-2">participer</span> vos invités.
            </h2>
            <p className="text-lg text-cream mb-10 leading-relaxed opacity-90">
              Dou'z Brise anime des ateliers smoothies et veggie-shakes pour anniversaires, événements familiaux ou ateliers à domicile. Chaque participant choisit son contenant, son lait végétal, ses fruits, ses toppings, puis crée sa propre boisson signature.
            </p>

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
              src="https://picsum.photos/seed/workshop/800/1000"
              alt="Atelier smoothie"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
