'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Utensils, ChefHat, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const chefs = [
  {
    name: 'David Liam',
    role: 'CEO',
    image: 'https://www.eu-startups.com/wp-content/uploads/2022/10/Screen-Shot-2022-10-07-at-10.20.42.png',
  },
  {
    name: 'Alex Mika',
    role: 'Executive Chef',
    image: 'https://i0.wp.com/www.foodandwinegazette.com/wp-content/uploads/2015/04/cuisiner_3.jpg',
  },
  {
    name: 'John Smith',
    role: 'Executive Chef',
    image: 'https://www.aperitif.com/wp-content/uploads/2025/08/Types-of-Chefs-1024x971.png',
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 11,
    minutes: 38,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return prev; 
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden font-sans text-slate-900">
      
      {/* Hero Section - Dynamic Background */}
   <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Dynamic Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="relative w-full h-full"
        >
          <Image 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
            alt="Hero Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </motion.div>
        {/* Deep Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
      </div>

      {/* Floating Decorative Elements (Foodie Vibe) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[20%] left-[10%] text-7xl opacity-40 blur-[1px]"
        >
          
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[20%] right-[10%] text-8xl opacity-30 blur-[2px]"
        >
          
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-yellow-400 text-sm font-bold uppercase tracking-widest mb-8"
        >
          <ChefHat size={18} />
          The Best Flavors in Town
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl  font-black text-white mb-6 drop-shadow-2xl italic uppercase tracking-tighter leading-[0.9]"
        >
          CRAVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
             FASTFOOD
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto leading-tight"
        >
          Savor the crunch, feel the heat, and enjoy 
          <span className="text-white font-bold italic"> world-class </span> 
          meals delivered in <span className="text-yellow-400 border-b-4 border-yellow-400/30">20 minutes.</span>
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/items" 
              className="group bg-red-600 text-white px-4 py-4 rounded-2xl text-2xl font-black hover:bg-white hover:text-red-600 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] inline-flex items-center gap-3 uppercase tracking-wider"
            >
              Order Now
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/about" 
              className="text-white border-2 border-white/30 hover:border-white px-10 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all inline-block"
            >
              View Menu
            </Link>
          </motion.div> */}
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-yellow-400 rounded-full" />
        </div>
      </motion.div>
    </section>


{/* Another section*/}
      <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image with Slide-in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Background paint splash effect can be a PNG or CSS blob */}
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-50 scale-110" />
              <Image 
                src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about_1_1.png" 
                alt="Fried Chicken"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side: Content with Slide-in from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-sm">
              <span className="text-xl">🔔</span> ABOUT US
            </div>
            
            <h2 className="text-5xl  font-black text-slate-900 uppercase tracking-tighter leading-tight">
              Delicia&apos;s About Fresh <br /> Flavorful Dining
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed">
              We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you&apos;ll love.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Stats Cards */}
              <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100">
                <div className="text-4xl">🍔</div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">1500+</h4>
                  <p className="text-gray-500 text-sm font-semibold uppercase">Total Food Item</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100">
                <div className="text-4xl">🏪</div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">500+</h4>
                  <p className="text-gray-500 text-sm font-semibold uppercase">Branch Office</p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase italic tracking-widest hover:bg-slate-900 transition-colors shadow-lg shadow-red-200">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Featured Items - Modern Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tight">Top Sellers</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { name: 'Classic Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', desc: 'Flame-grilled perfection' },
              { name: 'Cheese Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800', desc: 'Hand-tossed 4-cheese blend' },
              { name: 'Crispy Fries', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800', desc: 'Sea salt & rosemary seasoning' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-2">{item.name}</h3>
                  <p className="text-gray-500 mb-4">{item.desc}</p>
                  <Link href="/items" className="text-red-600 font-bold hover:underline">Customize →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] min-h-[500px] flex items-center overflow-hidden py-20">
      {/*bg texture*/}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" 
          alt="background" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* timer */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-5xl  font-black uppercase italic tracking-tighter mb-8 leading-none">
              Get <span className="text-red-600">25%</span> <br /> Discount
            </h2>

            {/* timer grid */}
            <div className="flex gap-4 mb-10">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[80px] text-center">
                  <span className="block text-3xl font-black leading-none mb-1">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase italic tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 shadow-xl shadow-red-600/20"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* food and price part */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="md:w-1/2 relative flex justify-center items-center"
          >
            {/* (Badge) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-10 right-10 md:right-20 z-20 bg-yellow-400 text-black w-24 h-24 rounded-full border-4 border-dashed border-black flex flex-col items-center justify-center font-black rotate-12"
            >
              <span className="text-[10px] uppercase">Special Price</span>
              <span className="text-xl">$10.99</span>
            </motion.div>

            {/*  (Burger/Combo) */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80" 
                alt="Featured Combo"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(255,0,0,0.3)]"
              />
            </div>

            
            <div className="absolute -right-10 top-20 hidden lg:block opacity-80 rotate-45">
              <Image src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&q=80" width={150} height={150} alt="fries" className="object-contain" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Chef section */}

      <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-yellow-500 text-xl">👨‍🍳</span>
            <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm">
              Our Special Chefs
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl  font-black text-slate-900 uppercase tracking-tighter leading-none"
          >
            Introducing Our Culinary <br /> Masters
          </motion.h2>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chefs.map((chef, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-gray-100 rounded-xl shadow-md"
            >
              {/* Image Wrapper */}
              <div className="relative h-[450px] w-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info Overlay (Visible on bottom like the image) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-6 rounded-lg text-center shadow-xl transition-all duration-300 group-hover:bg-red-600">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-white transition-colors">
                  {chef.name}
                </h3>
                <p className="text-gray-500 font-semibold uppercase text-xs tracking-widest mt-1 group-hover:text-yellow-400 transition-colors">
                  {chef.role}
                </p>
              </div>

              {/* Red Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>



      {/* Why Choose Us - Icon Grid */}
      <section className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '⚡', title: 'Flash Delivery', text: '30 mins or it\'s on us' },
              { icon: '🌿', title: 'Farm Fresh', text: 'Organic produce daily' },
              { icon: '💎', title: 'Premium Taste', text: 'Chef-curated recipes' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center p-10 border-2 border-white/20 rounded-3xl backdrop-blur-sm"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-2 uppercase">{feature.title}</h3>
                <p className="text-red-100">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories - Scrolling Ribbon Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 uppercase italic">Explore Cravings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400' },
              { name: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
              { name: 'Chicken', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400' },
              { name: 'French Fries', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400' },
              { name: 'Wraps', img: 'https://cdn.uengage.io/uploads/49314/image-957521-1723208395.jpeg' },
              { name: 'Drinks', img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/strawberry_lemonade_63154_16x9.jpg' },
              { name: 'Desserts', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400' },
              { name: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.95 }}
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image src={cat.img} alt={cat.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-black text-2xl uppercase tracking-widest">{cat.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Immersive */}
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.freepik.com/premium-photo/flying-burger-with-crispy-fries-cold-drink_1335264-595.jpg" 
          alt="Delicious Burger Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Title */}
          <h2 className="text-6xl  font-black text-white uppercase italic tracking-tighter leading-none">
            Hungry <span className="text-yellow-400">yet?</span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Your favorite meal is just a few clicks away. 
            Fresh, hot, and delivered straight to your door!
          </p>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/items" 
              className="group bg-red-600 hover:bg-yellow-500 text-white hover:text-black px-12 py-6 rounded-full text-2xl font-black transition-all duration-300 shadow-[0_10px_40px_rgba(220,38,38,0.4)] inline-flex items-center gap-3 italic tracking-widest"
            >
              LET&apos;S EAT! 
              <Utensils className="group-hover:rotate-12 transition-transform" size={28} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Food Elements (Optional Floating) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 left-10 opacity-20 hidden lg:block"
      >
        <span className="text-8xl">🍕</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-10 right-10 opacity-20 hidden lg:block"
      >
        <span className="text-8xl">🍟</span>
      </motion.div>
    </section>
    </div>
  );
}