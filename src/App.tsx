/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, Heart, Menu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PROPERTIES = [
  {
    id: 1,
    title: "Eco-Luxury Glass Cabin",
    location: "Reykjavík, Iceland",
    price: 450,
    rating: 4.98,
    reviews: 124,
    image: "/house1.png",
    category: "Cabins",
    isSuperhost: true
  },
  {
    id: 2,
    title: "Modern Desert Oasis",
    location: "Joshua Tree, California",
    price: 320,
    rating: 4.92,
    reviews: 89,
    image: "/house2.png",
    category: "Apartments",
    isSuperhost: false
  },
  {
    id: 3,
    title: "Cliffside Infinity Villa",
    location: "Santorini, Greece",
    price: 850,
    rating: 5.0,
    reviews: 56,
    image: "/house3.png",
    category: "Villas",
    isSuperhost: true
  },
  {
    id: 4,
    title: "Heritage Bamboo House",
    location: "Bali, Indonesia",
    price: 180,
    rating: 4.85,
    reviews: 210,
    image: "/house4.png",
    category: "Beach Houses",
    isSuperhost: false
  }
];

const CATEGORIES = ["All", "Apartments", "Villas", "Cabins", "Beach Houses"];

const LOCATIONS = [
  { name: "Mumbai", image: "https://picsum.photos/seed/mumbai/800/800" },
  { name: "Goa", image: "https://picsum.photos/seed/goa/800/800" },
  { name: "Manali", image: "https://picsum.photos/seed/manali/800/800" },
  { name: "Dubai", image: "https://picsum.photos/seed/dubai/800/800" }
];

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isSuperhost: boolean;
}

function PropertyCard({ property }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
        <img 
          src={property.image} 
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {property.isSuperhost && (
          <div className="absolute top-4 left-4 rounded-md bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900 shadow-sm">
            Superhost
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 rounded-full p-2 backdrop-blur-md transition-all duration-300 ${
            isFavorite 
              ? "bg-white text-red-500 shadow-lg scale-110" 
              : "bg-white/20 text-white hover:bg-white/40"
          }`}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900 backdrop-blur-sm">
          {property.category}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-zinc-900">{property.title}</h3>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-zinc-500">{property.location}</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-lg font-bold text-zinc-900">${property.price}</span>
          <span className="text-sm text-zinc-500">/ night</span>
        </div>
      </div>
    </motion.div>
  );
}

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "The glass cabin in Iceland was absolutely magical. Waking up to the sunrise over the mountains was an experience I'll never forget."
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "StaySphere made booking our desert getaway so easy. The Joshua Tree house was even better than the photos!"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    rating: 5,
    text: "Incredible villa in Santorini. The infinity pool and the service were top-notch. Highly recommend for a luxury stay."
  }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = activeFilter === "All" 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Globe size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">StaySphere</span>
          </div>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600">Explore</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600">Stays</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600">Experiences</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600">Online Experiences</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden text-sm font-medium text-zinc-600 hover:text-indigo-600 lg:block">
              Become a host
            </button>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer">
              <Menu size={18} className="text-zinc-600" />
              <div className="h-8 w-8 rounded-full bg-zinc-200" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-7xl">
              Find Your Perfect Stay Anywhere
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
              Book unique homes, apartments, and villas at the best prices.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 border-b border-zinc-100 p-4 sm:border-b-0 sm:border-r">
                <MapPin size={20} className="text-indigo-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</span>
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-1 items-center gap-3 border-b border-zinc-100 p-4 sm:border-b-0 sm:border-r">
                <Calendar size={20} className="text-indigo-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Check in</span>
                  <input 
                    type="text" 
                    placeholder="Add dates" 
                    className="bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="flex flex-1 items-center gap-3 p-4">
                <Users size={20} className="text-indigo-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Guests</span>
                  <input 
                    type="text" 
                    placeholder="Add guests" 
                    className="bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="p-2">
                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-bold text-white transition-colors hover:bg-indigo-700 sm:w-auto">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-zinc-900">Featured Stays</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Explore by Location Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12">Explore by Location</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={location.image} 
                alt={location.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white tracking-tight">{location.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white p-8 shadow-sm border border-zinc-100 text-left"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-zinc-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-zinc-900">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-100 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Support</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-600">AirCover</a></li>
                <li><a href="#" className="hover:text-indigo-600">Safety information</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Community</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-indigo-600">StaySphere.org</a></li>
                <li><a href="#" className="hover:text-indigo-600">Support Afghan refugees</a></li>
                <li><a href="#" className="hover:text-indigo-600">Combating discrimination</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Hosting</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-indigo-600">Try hosting</a></li>
                <li><a href="#" className="hover:text-indigo-600">AirCover for Hosts</a></li>
                <li><a href="#" className="hover:text-indigo-600">Explore hosting resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">StaySphere</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-indigo-600">Newsroom</a></li>
                <li><a href="#" className="hover:text-indigo-600">Learn about new features</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
            © 2024 StaySphere Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
