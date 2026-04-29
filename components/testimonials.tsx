export function Testimonials() {
  const testimonials = [
    {
      text: "Merci à Dou’z Brise ! J’ai été agréablement surprise de la réaction de mes invités. Ils ont beaucoup apprécié les délicieuses boissons proposées par Laëtitia et son équipe. Un stand innovant qui propose des boissons naturelles, ça vaut vraiment le coup d’essayer.",
      author: "Agnes B."
    },
    {
      text: "Laëtitia m’a fait découvrir le lait végétal. L’association avec les fruits m’a bluffée. Merci pour cette délicieuse expérience !",
      author: "Eléna"
    }
  ];

  return (
    <section id="avis" className="py-24 bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-text-soft">Ce que disent nos clients.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-border">
              <div className="text-green-light mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-lg text-text-main leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="font-serif font-bold text-xl text-green-deep">
                — {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
