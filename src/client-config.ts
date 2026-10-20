/**
 * CLIENT BRANDING — edit this file for each independent customer copy.
 * Keep the original Blank-Barbershop-Site repository generic.
 * Only publish verified contact details, photos and customer reviews.
 */
export const client = {
  name: 'Your Barbershop',
  shortName: 'YOUR BARBERSHOP',
  headline: ['YOUR', 'BARBERSHOP'],
  locationLabel: 'LOCAL BARBERS · YOUR TOWN',
  tagline: 'Haircuts · Fades · Beards · Shaves',
  previewPin: '0000',
  phone: 'Your shop telephone',
  phoneHref: '#contact',
  address: 'Your shop address',
  facebook: '#contact',
  googleMaps: '#contact',
  googleEmbed: '',
  rating: 0,
  reviewCount: 0,
  heroImage: '/images/template-hero.svg',
  gallery: [
    {src:'/images/template-cut-1.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/template-cut-2.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/template-cut-3.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/template-cut-4.svg',alt:'Example haircut gallery placeholder'},
  ],
  services: [
    ['Haircuts','Classic and modern cuts, finished to suit your style.'],
    ['Skin fades','Sharp fades and tapers with clean blending and detail.'],
    ['Hair & beard','A complete tidy-up with haircut, trim and beard shape.'],
    ['Wet & dry shave','Traditional shaving options for a clean finish.'],
  ],
  reviews: [
    ['“Add a verified review before launch.”','Customer review'],
    ['“Replace with a genuine customer quote.”','Customer review'],
    ['“Only publish attributed, verified reviews.”','Customer review'],
  ],
  hours: [
    ['Monday–Friday','Hours to be confirmed'],
    ['Saturday','Hours to be confirmed'],
    ['Sunday','Hours to be confirmed'],
  ],
} as const;
