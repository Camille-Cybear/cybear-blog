export const CATEGORIES = {
  veille: 'Veille',
  systemes: 'Systèmes',
  reseaux: 'Réseaux',
  securite: 'Sécurité',
  scripting: 'Scripting',
  homelab: 'Homelab',
  blog: 'Vie du blog',
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const CATEGORY_SLUGS = Object.keys(CATEGORIES) as CategorySlug[];
