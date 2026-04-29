'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Leaf, Check, GlassWater, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis'),
  lastName: z.string().optional(),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone requis'),
  eventType: z.string().min(1, 'Type d\'événement requis'),
  date: z.string().min(1, 'Date requise'),
  location: z.string().min(1, 'Lieu requis'),
  guests: z.string().min(1, 'Nombre d\'invités requis'),
  formule: z.string().min(1, 'Formule souhaitée requise'),
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
    // Format message for WhatsApp
    const message = `*Nouvelle demande de devis - Dou'z Brise* 🌿%0A
*Contact*
Nom: ${data.firstName} ${data.lastName || ''}
Email: ${data.email}
Tél: ${data.phone}%0A
*Événement*
Type: ${data.eventType}
Date: ${data.date}
Lieu: ${data.location}
Invités: ${data.guests}%0A
*Formule / Format souhaité*
${data.formule}%0A
*Message / Précisions*
${data.message || 'Aucun message particulier.'}`;

    // Target WhatsApp Number
    const targetPhone = '33675976921';
    
    // Artificial delay for animation wow effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`, '_blank');
    
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
              Parlons de votre événement.
            </h2>
            <p className="text-xl font-serif text-green-brand mb-4">Demandez un devis gratuit.</p>
            <p className="text-lg text-text-soft mb-8">
              Réponse personnalisée sous 24 à 48h ouvrées. Un acompte de 25% est demandé pour bloquer la date, le solde le jour de la prestation.
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
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-main mb-2">Prénom *</label>
                    <input 
                      id="firstName"
                      {...register('firstName')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.firstName && <p className="text-strawberry text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-main mb-2">Nom (optionnel)</label>
                    <input 
                      id="lastName"
                      {...register('lastName')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email *</label>
                    <input 
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.email && <p className="text-strawberry text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2">Téléphone *</label>
                    <input 
                      id="phone"
                      {...register('phone')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.phone && <p className="text-strawberry text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-text-main mb-2">Type d'événement *</label>
                    <select 
                      id="eventType"
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
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text-main mb-2">Date prévue *</label>
                    <input 
                      id="date"
                      type="date"
                      {...register('date')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.date && <p className="text-strawberry text-xs mt-1">{errors.date.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-text-main mb-2">Nombre d'invités *</label>
                    <input 
                      id="guests"
                      type="number"
                      {...register('guests')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    />
                    {errors.guests && <p className="text-strawberry text-xs mt-1">{errors.guests.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="formule" className="block text-sm font-medium text-text-main mb-2">Formule ou Format envisagé *</label>
                    <select 
                      id="formule"
                      {...register('formule')}
                      className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors appearance-none"
                    >
                      <optgroup label="Nos Formules">
                        <option value="">Sélectionnez...</option>
                        <option value="Cocktail Fraîcheur">Cocktail Fraîcheur</option>
                        <option value="Expérience Tropicale">Expérience Tropicale</option>
                        <option value="Brunch Healthy">Brunch Healthy</option>
                        <option value="Sur-mesure">Sur-mesure</option>
                        <option value="Atelier Smoothie / Veggie-shake">Atelier Smoothie / Veggie-shake</option>
                      </optgroup>
                      <optgroup label="Commande au Format">
                        <option value="Format S (33cl)">Format S (33cl)</option>
                        <option value="Format M (50cl)">Format M (50cl)</option>
                        <option value="Format L">Format L</option>
                        <option value="Format XL">Format XL</option>
                        <option value="Format Tisane XXS/XS">Format Tisane (XXS/XS)</option>
                      </optgroup>
                      <optgroup label="Autre">
                        <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                      </optgroup>
                    </select>
                    {errors.formule && <p className="text-strawberry text-xs mt-1">{errors.formule.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-text-main mb-2">Lieu de l'événement (Ville ou lieu de réception) *</label>
                  <input 
                    id="location"
                    {...register('location')}
                    className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                  />
                  {errors.location && <p className="text-strawberry text-xs mt-1">{errors.location.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Message libre (optionnel)</label>
                  <textarea 
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="w-full bg-cream-soft border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand transition-colors"
                    placeholder="Décrivez votre projet, vos envies, vos questions..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full relative flex justify-center items-center overflow-hidden bg-green-brand text-white hover:bg-green-deep rounded-full py-4 text-sm font-bold tracking-wider uppercase transition-all shadow-btn active:scale-95 disabled:opacity-90 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"
                        />
                    ) : null}
                    <span>{isSubmitting ? 'Préparation vers WhatsApp...' : 'Envoyer ma demande de devis'}</span>
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
