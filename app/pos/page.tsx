"use client";
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Search, Tag } from 'lucide-react';

export default function POSDesign() {
  const [cart, setCart] = useState([
    { id: 1, name: 'AI Course - Batch 01', price: 15000, qty: 1 },
    { id: 2, name: 'Cloud Hosting Setup', price: 5000, qty: 1 }
  ]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex text-gray-800 font-sans">
      {/* 1. Left Sidebar - Categories */}
      <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8 shadow-sm">
        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200"><Tag size={24}/></div>
        <div className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors flex flex-col items-center gap-1">
          <ShoppingCart size={20}/>
          <span className="text-[10px] font-bold">POS</span>
        </div>
      </div>

      {/* 2. Middle Content - Item Selection */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-gray-900">Checkout Terminal</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-64" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all cursor-pointer group">
              <div className="w-full h-32 bg-gray-50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">Product Image</span>
              </div>
              <h3 className="font-bold text-gray-800">Sample Item #{i}</h3>
              <p className="text-orange-600 font-black mt-1">Rs. 2,500.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Right Sidebar - Cart & Billing */}
      <div className="w-96 bg-white border-l border-gray-200 p-6 flex flex-col shadow-2xl">
        <h2 className="text-xl font-black mb-6 flex items-center gap-2">
          Current Order <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-md">2 Items</span>
        </h2>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <div>
                <h4 className="text-sm font-bold">{item.name}</h4>
                <p className="text-xs text-gray-500">Rs. {item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-1 bg-white border border-gray-200 rounded-md"><Minus size={14}/></button>
                <span className="text-sm font-bold">{item.qty}</span>
                <button className="p-1 bg-white border border-gray-200 rounded-md"><Plus size={14}/></button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 space-y-3">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>Subtotal</span>
            <span>Rs. 20,000.00</span>
          </div>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>Tax (10%)</span>
            <span>Rs. 2,000.00</span>
          </div>
          <div className="flex justify-between text-xl font-black text-gray-900 pt-2">
            <span>Total</span>
            <span className="text-orange-600">Rs. 22,000.00</span>
          </div>
          <button className="w-full bg-gray-900 text-white py-4 rounded-2xl mt-4 font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
            <CreditCard size={20}/> Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}