'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-16 pb-8 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Branding & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <img 
                src="/fire.png" 
                className="w-12 h-12 object-contain transition-transform group-hover:rotate-12" 
                alt="Logo" 
              />
              <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent tracking-tighter uppercase">
                FoodIX
              </h3>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Delicious fast food delivered fresh to your door in minutes! We don&apos;t just serve food; we deliver happiness.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600', link: 'https://facebook.com' },
                { Icon: Instagram, color: 'hover:bg-pink-600', link: 'https://instagram.com' },
                { Icon: XIcon, color: 'hover:bg-gray-800', link: 'https://x.com' },
                { Icon: Youtube, color: 'hover:bg-red-600', link: 'https://youtube.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank" // নতুন ট্যাবে ওপেন হওয়ার জন্য
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors ${social.color}`}
                >
                  {/* @ts-ignore */}
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Updated */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-yellow-500 uppercase tracking-widest">Menu</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Items', path: '/items' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-all w-fit"
                  >
                    <ArrowRight size={14} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6 text-yellow-500 uppercase tracking-widest">Hours</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Clock className="text-yellow-500" size={18} />
                <div>
                  <p className="text-sm font-bold text-white uppercase">Mon - Friday</p>
                  <p className="text-xs font-medium">10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <Clock className="text-red-500" size={18} />
                <div>
                  <p className="text-sm font-bold text-white uppercase">Sat - Sunday</p>
                  <p className="text-xs text-red-400 font-medium underline">12:00 PM - 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6 text-yellow-500 uppercase tracking-widest">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-500 shrink-0" size={18} />
                <p className="text-sm">123 Main Street, Foodville, CA 90210</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" size={18} />
                <p className="text-sm">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" size={18} />
                <p className="text-sm">info@foodix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2026 <span className="font-bold text-yellow-500">FoodIX</span>. All Rights Reserved. 
            <span className="hidden md:inline ml-2 text-gray-700">|</span>
            <span className="ml-2 italic text-gray-600"> Fresh & Fast 🔥</span>
          </p>
          
          <div className="flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
             <div className="px-2 py-1 bg-white rounded text-[10px] font-black text-black uppercase">Visa</div>
             <div className="px-2 py-1 bg-white rounded text-[10px] font-black text-black uppercase">MasterCard</div>
             <div className="px-2 py-1 bg-white rounded text-[10px] font-black text-black uppercase">PayPal</div>
             <div className="px-2 py-1 bg-white rounded text-[10px] font-black text-black uppercase">Stripe</div>
          </div>
        </div>
      </div>
    </footer>
  );
}