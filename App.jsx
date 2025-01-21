import React from 'react'
import HouseList from './HouseList';

export function App() {
    const items = [
        {
            id: 1,
            name: 'Cozy Cabin',
            location: 'Mountain View',
            rating: 4.8,
            pricePerNight: 120
        },
        {
            id: 2,
            name: 'Modern Apartment',
            location: 'Downtown',
            rating: 4.5,
            pricePerNight: 90
        },
        {
            id: 3,
            name: 'Beachfront Villa',
            location: 'Sunny Coast',
            rating: 4.9,
            pricePerNight: 250
        },
        {
            id: 4,
            name: 'Countryside Cottage',
            location: 'Green Valley',
            rating: 4.7,
            pricePerNight: 75
        },
        {
            id: 5,
            name: 'Luxury Penthouse',
            location: 'Skyline City',
            rating: 4.6,
            pricePerNight: 300
        },
        {
            id: 6,
            name: 'Rustic Farmhouse',
            location: 'Meadowfield',
            rating: 4.4,
            pricePerNight: 80
        },
        {
            id: 7,
            name: 'Suburban Home',
            location: 'Pleasantville',
            rating: 4.3,
            pricePerNight: 100
        },
        {
            id: 8,
            name: 'Tiny House',
            location: 'Lakeview',
            rating: 4.2,
            pricePerNight: 50
        },
        {
            id: 9,
            name: 'Treehouse Retreat',
            location: 'Forest Hills',
            rating: 4.9,
            pricePerNight: 200
        }
    ]
    
  return (
    <HouseList houses={items}/>
  )
}
