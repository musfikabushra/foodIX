'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, LogIn, ShieldAlert, Loader2, UtensilsCrossed } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        router.push('/items');
        router.refresh();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* 1. Background Foodish Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[180px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[150px] -z-10" />
      
      {/* Floating Elements for Foodish vibe */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 text-red-600/20 hidden lg:block"
      >
        <UtensilsCrossed size={100} />
      </motion.div>

      {/* 2. Main Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-2xl shadow-2xl relative z-10"
      >
        {/* Branding Header */}
        <div className="text-center mb-10">
          <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-20 h-20 bg-red-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-600/20"
          >
            <img src="/fire.png" alt="Logo" className="w-12 h-12 object-contain" />
          </motion.div>
          <h1 className="bg-gradient-to-r from-yellow-400 font-bold to-red-500 bg-clip-text text-4xl text-transparent ">
              Login
            </h1>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3 italic">
            Your Premium Fast Food Experience
          </p>
        </div>

        {/* Demo Credentials Section - Redesigned */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-yellow-500/5 border-l-4 border-yellow-500 rounded-r-2xl p-5 mb-8 flex items-start gap-4"
        >
          <ShieldAlert className="text-yellow-500 shrink-0 mt-1" size={20} />
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">Demo Credentials</p>
            <div className="space-y-1">
                <p className="text-sm text-gray-400 font-medium">Email: <span className="">admin@fastfood.com</span></p>
                <p className="text-sm text-gray-400 font-medium">Pass: <span className="">admin123</span></p>
            </div>
          </div>
        </motion.div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
              <Mail size={12} className="text-red-600" /> Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5  focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
              <Lock size={12} className="text-red-600" /> Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5  focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-gray-700"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message Animation */}
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold px-4 py-4 rounded-xl flex items-center gap-3"
              >
                <ShieldAlert size={16} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full bg-red-600 py-6 rounded-2xl font-black uppercase italic tracking-[0.3em] text-white hover:bg-red-700 active:scale-[0.98] transition-all disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed shadow-xl shadow-red-600/20"
          >
            <div className="relative z-10 flex items-center justify-center text-sm gap-3">
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Logging in...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Access Kitchen
                </>
              )}
            </div>
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-10 text-center">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-loose">
                Secure access for authorized staff only. <br />
                System monitored by <span className="text-red-900">FoodIX Security</span>
            </p>
        </div>
      </motion.div>
    </div>
  );
}