'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Zap, ShieldCheck, Heart } from 'lucide-react';
import { ChefHat, Flame, Award, Leaf } from 'lucide-react';
import { useState } from 'react';
export default function UniqueAboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

const signatureDishes = [
  { id: '01', name: 'Smash Burger', image: 'https://blog-content.omahasteaks.com/wp-content/uploads/2023/02/The-Mack-Burger-recipe-scaled.jpg' },
  { id: '02', name: 'Peri-Peri Wings', image: 'https://www.carnaldish.com/wp-content/uploads/2015/09/garlicgingerwings1.jpg' },
  { id: '03', name: 'Chicken Ramen', image: 'https://www.modernhoney.com/wp-content/uploads/2024/01/Homemade-Chicken-Ramen-1-crop-scaled.jpg' },
  { id: '04', name: 'Kebab', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab-600x600.jpg' },
];

const squad = [
  { name: 'Chef Gordon', role: 'Master of Heat', img: 'https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Elena Rodriguez', role: 'Flavor Architect', img: 'https://www.totaljobs.com/advice/wp-content/uploads/Sous-Chef-job-description_5719402.jpg' },
  { name: 'Marcus Chen', role: 'Patty Specialist', img: 'https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208266.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Sarah Jenkins', role: 'Sauce Alchemist', img: 'https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232211.jpg?semt=ais_hybrid&w=740&q=80' },
]; 

const [activeDish, setActiveDish] = useState(signatureDishes[0]);
  return (
    <div className="min-h-screen overflow-hidden font-sans">
      
      {/* 1. THE EXPLOSIVE HERO */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Floating Decorative Food (Parallax) */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%]  z-0">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKa2YC7AU1rA223EN34yqYJmDtM4cxtM4aA&s" width={350} height={350} alt="chili" className="rotate-45 rounded-lg" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-[10%]  z-0">
          <Image src="https://img.freepik.com/premium-photo/highresolution-food-photography-fried-chicken-wings-floating-midair_108280-2925.jpg" width={280} height={280} alt="lettuce" className="-rotate-12 rounded-lg" />
        </motion.div>

        <div className="text-center z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(220,38,38,0.5)]"
          >
            <UtensilsCrossed size={40} />
          </motion.div>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-8xl  font-black italic tracking-tighter leading-[0.8]"
          >
            CRAFTING <br /> 
            <span className="text-yellow-400">FLAVOR</span>
          </motion.h1>
          <p className="mt-8 text-xl font-bold uppercase tracking-[0.5em] text-gray-400">Est. 2020 • The Original Taste</p>
        </div>
      </section>

      {/* 2. SKEWED STORY SECTION */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-yellow-400 -skew-y-3 origin-right z-0"></div>
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
             <div className="absolute inset-0 bg-black rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
             <Image 
                src="https://img.freepik.com/free-photo/delicious-epic-food-presentation_23-2151888655.jpg" 
                width={600} height={700} 
                alt="chef" 
                className="relative rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform object-cover h-[500px]"
             />
          </div>
          <div className="text-black">
            <h2 className="text-6xl font-black uppercase italic leading-none mb-6">Our Secret <br /> Ingredient? <span className="text-red-600">Soul.</span></h2>
            <p className="text-lg font-bold mb-6">We don't follow recipes; we follow instincts. Every burger, every fry, and every sauce is a result of 1,000 trials.</p>
          </div>
        </div>
      </section>

      {/* 3. MASONRY STYLE FEATURES */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:mt-20 p-10 bg-[#151515] rounded-[2rem] border-b-8 border-red-600"
          >
            <Zap className="text-yellow-400 mb-6" size={50} />
            <h3 className="text-3xl text-white font-bold uppercase mb-4 italic">Ultra Fast</h3>
            <p className="text-gray-400">Hot food delivered to your hands within 15 minutes of ordering. No excuses.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-red-600 rounded-[2rem] shadow-[0_20px_60px_rgba(220,38,38,0.3)]"
          >
            <Heart className="text-white mb-6" size={50} />
            <h3 className="text-3xl font-black uppercase mb-4 italic">Fresh Made</h3>
            <p className="text-white/80">Every patty is hand-smashed. Every bun is baked this morning. Taste the difference.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:mt-10 p-10 bg-[#151515] rounded-[2rem] border-b-8 border-yellow-400"
          >
            <ShieldCheck className="text-red-600 mb-6" size={50} />
            <h3 className="text-3xl text-white font-bold uppercase mb-4 italic">Pure Quality</h3>
            <p className="text-gray-400">Locally sourced beef and organic vegetables from farms we personally visit.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. THE "BIG STATS" OVERLAP */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="group relative">
                <div className="text-[12rem] font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity">50k</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <p className="text-2xl font-black uppercase italic">Happy Foodies</p>
                    <p className="text-yellow-400 font-bold tracking-widest uppercase text-xs">Serving daily joy</p>
                </div>
            </div>
            <div className="w-[2px] h-32 bg-red-600 hidden md:block mx-10"></div>
            <div className="group relative">
                <div className="text-[12rem] font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity">12</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <p className="text-2xl font-black uppercase italic">Master Chefs</p>
                    <p className="text-yellow-400 font-bold tracking-widest uppercase text-xs">The kitchen elite</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. CIRCULAR TEAM SLIDER (Visual Hint) */}
     <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl text-white font-bold uppercase italic tracking-tighter"
          >
            The Squad <span className="text-red-600 underline decoration-yellow-400 underline-offset-8">Behind</span> The Pan
          </motion.h2>
        </div>

        {/* 4 Person Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {squad.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Image Container */}
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400/30 group-hover:rotate-180 transition-transform duration-1000"></div>
                
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-yellow-400 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <Image 
                    src={member.img} 
                    fill 
                    alt={member.name} 
                    className="object-cover" 
                  />
                </div>
              </div>

              {/* Text Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (i * 0.1) + 0.3 }}
              >
                <h4 className="text-2xl font-black uppercase italic text-white group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h4>
                <p className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] mt-1">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. SIGNATURE DISH INTERACTIVE SHOWCASE */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Interactive List */}
            <div className="z-10">
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Our DNA</span>
              <h2 className="text-6xl font-black uppercase italic mb-12 leading-none">The Icons Of <br /><span className="text-yellow-400">Our Kitchen</span></h2>
              
              <div className="space-y-4">
                {signatureDishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    onMouseEnter={() => setActiveDish(dish)}
                    className={`group cursor-pointer flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 ${activeDish.id === dish.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                  >
                    <span className={`text-2xl font-black italic ${activeDish.id === dish.id ? 'text-red-600' : 'text-gray-600'}`}>
                      {dish.id}
                    </span>
                    <h3 className={`text-4xl font-black uppercase italic tracking-tighter transition-all ${activeDish.id === dish.id ? 'translate-x-4 text-red' : 'text-gray-500'}`}>
                      {dish.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Dynamic Image Reveal */}
            <div className="relative h-[600px] w-full hidden lg:block">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeDish.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-[0_0_80px_rgba(234,179,8,0.15)]"
                >
                  <Image 
                    src={activeDish.image} 
                    fill 
                    alt={activeDish.name} 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <p className="bg-yellow-400 text-black px-4 py-1 rounded-full font-black text-xs uppercase mb-2 inline-block">Signature Item</p>
                    <h4 className="text-3xl text-white font bold uppercase italic">{activeDish.name}</h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BIG TEXT PHILOSOPHY SECTION */}
      <section className="py-32 bg-yellow-400 text-black relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-0 left-0 text-[20rem] font-black opacity-5 select-none leading-none -ml-20">FRESH</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Grid Mix */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                whileInView={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="h-64 rounded-3xl bg-black overflow-hidden rotate-3"
              >
                <Image src="https://clubandresortchef.com/wp-content/uploads/2019/04/ACF_Certifed_Master_Chefs_1.jpg" fill alt="img" className="object-cover opacity-80" />
              </motion.div>
              <motion.div 
                whileInView={{ y: [0, 20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="h-80 rounded-3xl bg-red-600 overflow-hidden -rotate-6 mt-10 p-4 flex flex-col justify-end"
              >
                <ChefHat size={48} className="text-white mb-4" />
                <p className="text-white font-black uppercase leading-none text-2xl tracking-tighter">Certified <br /> Masters</p>
              </motion.div>
            </div>

            {/* Content Box */}
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-7xl font-black uppercase italic tracking-tighter leading-[0.85]">
                WE DON'T <br /> <span className="text-red-600">PLAY</span> WITH <br /> YOUR FOOD.
              </h2>
              <p className="text-xl font-bold leading-tight max-w-md">
                No chemicals. No frozen shortcuts. Just fire, fresh produce, and the relentless pursuit of the perfect bite.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400">
                        <Flame size={24} />
                    </div>
                    <span className="font-black uppercase text-sm tracking-widest">Flame Grilled</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400">
                        <Award size={24} />
                    </div>
                    <span className="font-black uppercase text-sm tracking-widest">Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400">
                        <Leaf size={24} />
                    </div>
                    <span className="font-black uppercase text-sm tracking-widest">100% Organic</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes scroll-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
            display: flex;
            width: 200%;
            animation: scroll-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}