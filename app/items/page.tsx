// import Link from 'next/link';
// import Image from 'next/image';
// import { apiClient } from '@/lib/api';

// interface Item {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
// }

// async function getItems(): Promise<Item[]> {
//   try {
//     const data = await apiClient.get('/api/items');
//     return data || [];
//   } catch (error) {
//     console.error('Error fetching items:', error);
//     return [];
//   }
// }

// export default async function ItemsPage() {
//   const items = await getItems();

//   return (
//     <div className="container mx-auto px-4 py-12 bg-white">
//       <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
//       {items.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-600 mb-4">No items available. Make sure the Express server is running.</p>
//           <p className="text-gray-500">Run: cd server && npm install && npm start</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {items.map((item) => (
//             <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
//               <div className="relative h-80 bg-gray-200">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6 flex flex-col">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-xl text-black font-bold">{item.name}</h2>
//                   <span className="text-red-600 font-bold text-lg">${item.price}</span>
//                 </div>
//                 <p className="text-black mb-3 flex-grow">{item.description}</p>
//                 <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-4 w-fit">
//                   {item.category}
//                 </span>
//                 <Link href={`/items/${item.id}`} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition text-center">
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { apiClient } from '@/lib/api';
import { Utensils, Star, Clock, Flame, ChevronRight } from 'lucide-react';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

async function getItems(): Promise<Item[]> {
  try {
    const data = await apiClient.get('/api/items');
    return data || [];
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <Image 
          src="https://thumbs.dreamstime.com/b/close-up-fried-chicken-pieces-chili-peppers-herbs-splash-oil-steam-rising-around-them-fast-food-concept-327912157.jpg" 
          alt="Banner" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-red-600"></span>
            <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">Exquisite Taste</span>
            <span className="h-[1px] w-8 bg-red-600"></span>
          </div>
          <h1 className="text-6xl  font-black text-white uppercase italic tracking-tighter">
            Our <span className="text-red-600">Signature</span> Menu
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm md:text-base font-medium uppercase tracking-widest">
            Handcrafted with fresh ingredients by our master chefs
          </p>
        </div>
      </section>

      {/* 2. MENU CONTENT SECTION */}
      <div className="container mx-auto px-4 py-16">
        
        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl border border-dashed border-gray-200">
            <Utensils className="mx-auto mb-6 text-gray-300" size={64} />
            <p className="text-2xl font-bold text-gray-800">No dishes served yet!</p>
            <p className="text-gray-500 mt-2">Make sure your Express server is running on port 4000.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-82 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 mb-10"
                  />
                  {/* Floating Price */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
                    <span className="text-red-600 font-black text-lg">${item.price}</span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-400 text-xs font-bold ml-2">(4.9)</span>
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 uppercase italic mb-3 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h2>
                  
                  <p className="text-gray-500 text-sm font-medium line-clamp-2 mb-6">
                    {item.description}
                  </p>

                  {/* Micro Stats */}
                  <div className="flex items-center gap-6 mb-8 border-t border-gray-50 pt-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-red-500" />
                      <span className="text-[10px] font-black text-gray-400 uppercase">15 Min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame size={16} className="text-orange-500" />
                      <span className="text-[10px] font-black text-gray-400 uppercase">450 Kcal</span>
                    </div>
                  </div>

                  <Link 
                    href={`/items/${item.id}`} 
                    className="flex items-center justify-between w-full bg-gray-900 text-white py-4 px-8 rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] group-hover:bg-red-600 transition-all shadow-lg"
                  >
                    View Details
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. NEWSLETTER / PROMO SECTION */}
      <section className="container mx-auto px-4 pb-24">
        <div className="bg-red-600 rounded-[3rem] p-12 relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-tight">
                Get 20% Discount <br /> On Your First Order
              </h3>
              <p className="text-red-100 mt-4 font-bold uppercase tracking-widest text-sm">Use Code: FIRSTFOOD</p>
            </div>
            <button className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}