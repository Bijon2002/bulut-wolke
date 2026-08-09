export interface Location {
  name: string
  address: string
  hours: string
  phone: string
  maps: string
}

export const locations: Location[] = [
  {
    name: 'Standort Siegburg',
    address: 'Kaiserstraße 42, 53721 Siegburg',
    hours: 'Mo–Sa: 9:00–19:00 Uhr',
    phone: '+49 2241 123 456',
    maps: 'https://maps.google.com/?q=Kaiserstraße+42+53721+Siegburg',
  },
  {
    name: 'Standort Sankt Augustin',
    address: 'Marktplatz 8, 53757 Sankt Augustin',
    hours: 'Mo–Sa: 9:00–19:00 Uhr',
    phone: '+49 2241 789 012',
    maps: 'https://maps.google.com/?q=Marktplatz+8+53757+Sankt+Augustin',
  },
]
