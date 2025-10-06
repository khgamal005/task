"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Send, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const logo = "/logo.PNG";
  const footer = "/footer.PNG";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer 
      className="w-full border-t border-gray-200 relative min-h-[400px]"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Optional: makes it fixed on scroll
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Your content remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ... rest of your content ... */}
        </div>
      </div>
    </footer>
  );
}