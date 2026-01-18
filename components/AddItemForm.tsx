'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusCircle, 
  Image as ImageIcon, 
  Tag, 
  DollarSign, 
  FileText, 
  Utensils,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { API_URL } from '@/lib/api';

export default function AddItemForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        })
      });

      if (res.ok) {
        showToast('Item added successfully!', 'success');
        setFormData({ name: '', description: '', price: '', image: '', category: '' });
        setTimeout(() => router.push('/items'), 1500);
      } else {
        showToast('Failed to add item', 'error');
      }
    } catch (error) {
      showToast('Server error. Is the backend running?', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={`fixed top-6 right-6 px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center gap-3 font-bold border ${
              toast.type === 'success' 
              ? 'bg-green-500/10 border-green-500 text-green-500 backdrop-blur-md' 
              : 'bg-red-500/10 border-red-500 text-red-500 backdrop-blur-md'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit} 
        className="space-y-6 bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-600 rounded-2xl shadow-lg shadow-red-600/20">
                <PlusCircle className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Add New Dish</h2>
        </div>

        {/* Item Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
            <Utensils size={14} /> Item Name
          </label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all placeholder:text-gray-700"
            placeholder="e.g., Ghost Pepper Burger"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
            <FileText size={14} /> Description
          </label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all placeholder:text-gray-700 resize-none"
            placeholder="What makes this dish special?"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
              <DollarSign size={14} /> Price ($)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all placeholder:text-gray-700"
              placeholder="9.99"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
              <Tag size={14} /> Category
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-black">Select Category</option>
              {['Burgers', 'Pizza', 'Chicken', 'Sides', 'Wraps', 'Drinks', 'Desserts', 'Ramen'].map(cat => (
                <option key={cat} value={cat} className="bg-black">{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
            <ImageIcon size={14} /> Image URL
          </label>
          <input
            name="image"
            type="url"
            required
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4  focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all placeholder:text-gray-700"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase italic tracking-[0.2em] overflow-hidden active:scale-[0.98] transition-all disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed shadow-[0_15px_40px_rgba(220,38,38,0.2)] mt-4"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processing...
              </>
            ) : (
              'Add to Menu'
            )}
          </div>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </motion.form>
    </div>
  );
}