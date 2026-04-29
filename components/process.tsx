import { MessageSquare, FileText, CheckCircle2, PartyPopper } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Demande de devis",
      desc: "Vous renseignez le type d’événement, la date, le lieu, le nombre d’invités et vos envies."
    },
    {
      icon: FileText,
      title: "2. Proposition",
      desc: "Nous recommandons la formule adaptée et envoyons un devis clair sous 48h."
    },
    {
      icon: CheckCircle2,
      title: "3. Validation",
      desc: "Signature du contrat et règlement d'un acompte pour bloquer la date."
    },
    {
      icon: PartyPopper,
      title: "4. Jour J",
      desc: "Installation, service, animation, rangement et expérience inoubliable."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-6">
            Une prestation claire, simple et rassurante.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-green-light/50" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-cream-soft border-4 border-white shadow-sm rounded-full flex items-center justify-center text-green-brand mb-6 relative z-10">
                  <Icon size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-green-deep mb-3">{step.title}</h3>
                <p className="text-text-soft text-sm px-4 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
