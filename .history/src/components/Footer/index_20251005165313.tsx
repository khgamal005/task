"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Send, Mail } from "lucide-react";


export default function Footer() {
  const [email, setEmail] = useState("");
  const logo = "/logo.PNG";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* First Column - Logo & Description */}
          <div className="col-span-1">
            <div className="mb-4">
             <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={66}
                height={51}
                className="object-contain opacity-100"
              />
            </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime. Soluta dolor quae
            </p>
          </div>

          {/* Second Column - Let Us Help */}
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg">Let Us Help</h5>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                My Account
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                All Products
              </a>
            </div>
          </div>

          {/* Third Column - Policies */}
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg">Policies</h5>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Refund Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Cancellation Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Fourth Column - Newsletter & Social */}
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg">Send Email</h5>
            
            {/* Email Input */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE968E] focus:border-transparent text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#BE968E] text-white py-3 rounded-lg hover:bg-[#a8827a] transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-gray-900 font-medium text-sm">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#BE968E] hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#BE968E] hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#BE968E] hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#BE968E] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#BE968E] hover:text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}