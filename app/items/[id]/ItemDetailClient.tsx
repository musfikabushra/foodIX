'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Star, Clock, Flame, 
  ShieldCheck, ShoppingBag, Info, Heart, 
  Leaf, UtensilsCrossed, Share2 
} from 'lucide-react';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ItemDetailClient({ item }: { item: Item }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen  selection:bg-red-600 overflow-x-hidden">
      
      {/* 1. TOP NAVIGATION */}
      <div className="container mx-auto px-6 pt-10">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/items" className="group flex items-center gap-3 text-gray-400 hover:text-red-500 transition-all">
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-red-600/10">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="font-black uppercase tracking-[0.2em] text-[10px] italic">Back to Menu</span>
            </Link>
          </motion.div>
          
          <div className="flex gap-4">
            <button className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
              <Share2 size={18} />
            </button>
            <button className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-red-600 transition-all group">
              <Heart size={18} className="group-hover:fill-white" />
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 2. IMAGE SECTION WITH ANIMATED BADGES */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-[4rem] overflow-hidden border-[1px] border-white/10 shadow-[0_0_100px_rgba(220,38,38,0.1)]"
            >
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s]" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Category Floating Badge */}
              <div className="absolute top-10 left-10">
                <motion.span 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-red-600 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl italic"
                >
                  {item.category}
                </motion.span>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
               {[
                 { icon: <Clock className="text-yellow-500" />, label: 'Ready In', val: '15 Min' },
                 { icon: <Flame className="text-orange-500" />, label: 'Calories', val: '450 kcal' },
                 { icon: <Leaf className="text-green-500" />, label: 'Freshness', val: '100%' }
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 * i }}
                   className="bg-white/5 p-6 rounded-[2.5rem] border border-white/5 text-center hover:bg-white/10 transition-colors"
                 >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <p className="text-[9px] uppercase text-gray-500 font-black tracking-widest">{stat.label}</p>
                    <p className="font-black italic mt-1 text-sm">{stat.val}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* 3. DETAILS SECTION */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-gray-500 font-black text-[10px] tracking-widest underline">120+ REVIEWS</span>
              </div>
              
              <h1 className="text-6xl  font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
                {item.name}
              </h1>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-red-600 italic tracking-tighter">${item.price.toFixed(2)}</span>
                <span className="text-gray-600 font-bold uppercase text-xs tracking-widest italic">/ Premium Serving</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="relative p-6 bg-white/5 rounded-3xl border-l-4 border-red-600">
                <p className="text-gray-500 text-lg leading-relaxed italic italic font-medium">
                  "{item.description}"
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={16} />, text: 'Chef Certified' },
                  { icon: <UtensilsCrossed size={16} />, text: 'Organic' },
                ].map((h, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-red-600">{h.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{h.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. ACTION SECTION */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="space-y-2 pt-4">
              <button className="group relative w-full bg-red-600 py-5 px-5 rounded-[2rem] overflow-hidden active:scale-95 transition-all shadow-[0_20px_60px_rgba(220,38,38,0.4)]">
                <div className="relative z-10 flex items-center justify-center gap-4 font-black uppercase italic tracking-[0.3em] text-lg">
                  <ShoppingBag size={24} /> Add to Cart
                </div>
                {/* Button Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <Link href="/items" className="block w-full text-center py-6 rounded-[2rem] border border-white/10 font-black uppercase italic tracking-[0.3em] text-sm text-gray-500 hover:text-yellow-500  transition-all">
                Continue Exploring
              </Link>
            </motion.div>

            {/* Info Message */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1 }}
              className="flex items-center gap-3 p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl"
            >
              <Info className="text-blue-500 shrink-0" size={18} />
              <p className="text-[10px]  font-bold uppercase tracking-widest leading-relaxed">
                Free delivery on orders above $30. Est. delivery time: 25 mins.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* BACKGROUND DECORATION */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}