"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Send, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
<footer className="w-full border-t border-gray-200 relative min-h-[400px]">
  {/* Background Image */}
  <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/davb7cdki/image/upload/v1759752487/footer_atcdq6.png')] bg-cover bg-center bg-no-repeat" />
  
  {/* Background Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
    {/* Main Footer Content - 4 Columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* First Column - Logo & Description */}
      <div className="col-span-1">
        <div className="mb-4">
          <Link href="/">
            <div className="relative w-[66px] h-[51px]">
              <Image
                src="https://res.cloudinary.com/davb7cdki/image/upload/v1759752570/logo_rns25z.png"
                alt="Logo"
                fill
                className="object-contain opacity-100"
                quality={75}
              />
            </div>
          </Link>
        </div>
        <p className="text-white text-sm leading-relaxed">
          Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime. Soluta dolor quae
        </p>
      </div>

      {/* Second Column - Let Us Help */}
      <div className="col-span-1">
        <h5 className="font-semibold text-white mb-4 text-lg">Let Us Help</h5>
        <div className="flex flex-col space-y-3">
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            My Account
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            Categories
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            All Products
          </a>
        </div>
      </div>

      {/* Third Column - Policies */}
      <div className="col-span-1">
        <h5 className="font-semibold text-white mb-4 text-lg">Policies</h5>
        <div className="flex flex-col space-y-3">
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            Refund Policy
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            Cancellation Policy
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            Terms and Conditions
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-200">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Fourth Column - Newsletter & Social */}
      <div className="col-span-1">
        <h5 className="font-semibold text-white mb-4 text-lg">Send Email</h5>
        
        {/* Email Input */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 z-10" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-32 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm bg-white bg-opacity-20 text-white placeholder-gray-300 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#BE968E] text-white py-2 px-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center text-sm font-medium w-30"
              >
                Send
              </button>
            </div>
          </div>
        </form>

        {/* Social Media */}
        <div className="space-y-3">
          <p className="text-white font-medium text-sm">Follow Us</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#BE968E] transition-colors duration-200 group"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-[#BE968E]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#BE968E] transition-colors duration-200 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-[#BE968E]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#BE968E] transition-colors duration-200 group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-[#BE968E]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#BE968E] transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-[#BE968E]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#BE968E] transition-colors duration-200 group"
            >
              <Send className="w-5 h-5 text-white group-hover:text-[#BE968E]" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-white border-opacity-30 mt-8 pt-8 text-center">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
}