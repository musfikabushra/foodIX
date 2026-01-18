// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { apiClient } from "@/lib/api";

// interface Item {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
// }

// async function getItem(id: string): Promise<Item | null> {
//   try {
//     return await apiClient.get(`/api/items/${id}`);
//   } catch (error) {
//     console.error("Error fetching item:", error);
//     return null;
//   }
// }

// export default async function ItemDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const item = await getItem(params.id);

//   if (!item) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4 py-14">

//         {/* Back Button */}
//         <Link
//           href="/items"
//           className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 mb-10"
//         >
//           ← Back to Menu
//         </Link>

//         {/* Main Card */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2">

//             {/* Image Section */}
//             <div className="relative h-[420px] lg:h-full bg-gray-200">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <span className="absolute top-6 left-6 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold">
//                 {item.category}
//               </span>
//             </div>

//             {/* Details Section */}
//             <div className="p-10 flex flex-col justify-between">
//               <div>
//                 <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
//                   {item.name}
//                 </h1>

//                 <div className="mb-6 pb-6 border-b">
//                   <p className="text-4xl font-bold text-red-600">
//                     ${item.price.toFixed(2)}
//                   </p>
//                   <p className="text-gray-500 text-sm mt-1">
//                     Price per serving
//                   </p>
//                 </div>

//                 <div className="mb-8">
//                   <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                     Description
//                   </h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Highlights */}
//                 <div className="mb-8">
//                   <h2 className="text-lg font-semibold text-gray-800 mb-3">
//                     Why you’ll love it
//                   </h2>
//                   <ul className="space-y-2 text-gray-600">
//                     <li>✔ Fresh ingredients</li>
//                     <li>✔ Prepared to order</li>
//                     <li>✔ Fast delivery available</li>
//                     <li>✔ Quality guaranteed</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="space-y-3 pt-6 border-t">
//                 <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition">
//                   🛒 Add to Cart
//                 </button>

//                 <Link
//                   href="/items"
//                   className="block text-center border-2 border-red-600 text-red-600 py-4 rounded-xl font-bold hover:bg-red-50 transition"
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Extra Section */}
//         <div className="max-w-6xl mx-auto mt-16 bg-white rounded-2xl shadow p-8 text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-3">
//             Fresh & Delicious
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Every item is carefully prepared using high-quality ingredients to
//             give you the best dining experience — whether you dine in or order
//             online.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { notFound } from "next/navigation";
import { apiClient } from "@/lib/api";
import ItemDetailClient from "./ItemDetailClient";

// টাইপ ডিফিনিশন
interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

async function getItem(id: string): Promise<Item | null> {
  try {
    const data = await apiClient.get(`/api/items/${id}`);
    return data || null;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const item = await getItem(resolvedParams.id);

  if (!item) {
    notFound();
  }

  return <ItemDetailClient item={item} />;
}