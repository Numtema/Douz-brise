'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Leaf, Check, GlassWater, Heart } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone requis'),
  eventType: z.string().min(1, 'Type d\'événement requis'),
  date: z.string().min(1, 'Date requise'),
  location: z.string().min(1, 'Lieu requis'),
  guests: z.string().min(1, 'Nombre d\'invités requis'),
  formule: z.string().min(1, 'Formule souhaitée requise'),
  allergies: z.string().optional(),
  message: z.string().optional(),
});

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const reassurances = [
    { icon: Leaf, text: 'Produits naturels' },
    { icon: GlassWater, text: 'Sans sucre ajouté' },
    { icon: Heart, text: 'Fait maison' },
  ];

  return (
    <section id="contact" className="py-24 bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reassurance Banner */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-16">
          {reassurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-green-deep">
                <div className="w-10 h-10 rounded-full bg-green-light/40 flex items-center justify-center">
                  <Icon size={20} className="text-green-brand" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">{item.text}</span>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-6">
              Parlez-nous de votre événement.
            </h2>
            <p className="text-lg text-text-soft mb-8">
              Réponse personnalisée sous 48h selon la date, le lieu, le nombre d'invités et le type de prestation souhaitée.
            </p>
            <div className="bg-cream rounded-2xl p-6 border border-border">
              <p className="text-sm text-text-main">
                <strong>Attention :</strong> Aucune réservation n'est confirmée sans devis validé, contrat signé et acompte.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[2rem] p-6 sm:p-10 shadow-soft border border-border">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-brand" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-green-deep mb-4">Demande envoyée !</h3>
                <p className="text-text-main mb-8">
                  Merci pour votre confiance. Laëtitia vous répondra d'ici 48h ouvrées avec une proposition sur mesure.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-cream text-green-deep hover:bg-green-light px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-colors"
                >
                  Faire une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Prénom & Nom *</label>
                    <input 
                      {...register('name')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.name && <p className="text-strawberry text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Email *</label>
                    <input 
                      type="email"
                      {...register('email')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.email && <p className="text-strawberry text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Téléphone *</label>
                    <input 
                      {...register('phone')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.phone && <p className="text-strawberry text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Type d'événement *</label>
                    <select 
                      {...register('eventType')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors appearance-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="mariage">Mariage / Vin d'honneur</option>
                      <option value="brunch">Brunch</option>
                      <option value="evjf">EVJF / EVJG</option>
                      <option value="entreprise">Événement d'entreprise</option>
                      <option value="autre">Autre événement privé</option>
                    </select>
                    {errors.eventType && <p className="text-strawberry text-xs mt-1">{errors.eventType.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Date prévue *</label>
                    <input 
                      type="date"
                      {...register('date')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.date && <p className="text-strawberry text-xs mt-1">{errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Lieu / Ville *</label>
                    <input 
                      {...register('location')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.location && <p className="text-strawberry text-xs mt-1">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Nombre d'invités *</label>
                    <input 
                      type="number"
                      {...register('guests')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.guests && <p className="text-strawberry text-xs mt-1">{errors.guests.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">Formule souhaitée *</label>
                    <select 
                      {...register('formule')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors appearance-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="cocktail">Cocktail Fraîcheur (690 €)</option>
                      <option value="tropicale">Expérience Tropicale (950 €)</option>
                      <option value="brunch">Brunch Healthy (780 €)</option>
                      <option value="mesure">Sur mesure (Dès 1 200 €)</option>
                      <option value="atelier">Atelier Smoothie / Veggie-shake</option>
                      <option value="jesaispas">Je ne sais pas encore</option>
                    </select>
                    {errors.formule && <p className="text-strawberry text-xs mt-1">{errors.formule.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Allergies ou contraintes (optionnel)</label>
                  <input 
                    {...register('allergies')}
                    className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Message libre (optionnel)</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    placeholder="Parlez-nous un peu plus de l'ambiance souhaitée..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-brand text-white hover:bg-green-deep rounded-full py-4 text-sm font-bold tracking-wider uppercase transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-btn"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
