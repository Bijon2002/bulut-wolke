export interface Product {
  name: string
  category: Category
  description: string
  badge: string
  image: string
  /** Shown on the homepage teaser. */
  highlight?: boolean
}

export type Category = 'Oliven' | 'Antipasti' | 'Pasten & Dips'

/** Category order used on /spezialitaeten. */
export const categories: Category[] = ['Oliven', 'Antipasti', 'Pasten & Dips']

export const products: Product[] = [
  {
    name: 'Marinierte Oliven',
    category: 'Oliven',
    description: 'Handverlesene Oliven mit Kräutern und Knoblauch mariniert',
    badge: 'Beliebt',
    image: '/products/marinierte_oliven_sm.jpg',
    highlight: true,
  },
  {
    name: 'Schafskäse-Oliven',
    category: 'Oliven',
    description: 'Grüne Oliven gefüllt mit cremigem Schafskäse',
    badge: 'Premium',
    image: '/products/schafskaese_oliven_sm.jpg',
  },
  {
    name: 'Gegrilltes Gemüse',
    category: 'Antipasti',
    description: 'Zucchini, Paprika und Aubergine vom Grill mit Olivenöl',
    badge: 'Hausspezialität',
    image: '/products/gegrilltes_gemuese_sm.jpg',
    highlight: true,
  },
  {
    name: 'Gefüllte Weinblätter',
    category: 'Antipasti',
    description: 'Zarte Weinblätter gefüllt mit Reis und frischen Kräutern',
    badge: 'Familienrezept',
    image: '/products/gefuellte_weinblaetter_sm.jpg',
    highlight: true,
  },
  {
    name: 'Getrocknete Tomaten',
    category: 'Antipasti',
    description: 'Sonnengetrocknete Tomaten in Olivenöl mit Basilikum',
    badge: 'Klassiker',
    image: '/products/getrocknete_tomaten_sm.jpg',
  },
  {
    name: 'Hummus Klassik',
    category: 'Pasten & Dips',
    description: 'Cremiger Hummus aus Kichererbsen mit Tahini und Zitrone',
    badge: 'Vegan',
    image: '/products/hummus_klassik_sm.jpg',
    highlight: true,
  },
]

export const badgeColor: Record<string, string> = {
  'Beliebt': 'bg-sky-100 text-sky-800 border-sky-300',
  'Hausspezialität': 'bg-yellow-100 text-yellow-900 border-yellow-300',
  'Familienrezept': 'bg-olive-100 text-olive-800 border-olive-300',
  'Vegan': 'bg-olive-100 text-olive-800 border-olive-300',
  'Premium': 'bg-yellow-100 text-yellow-900 border-yellow-300',
  'Klassiker': 'bg-cream-200 text-olive-700 border-olive-200',
}
