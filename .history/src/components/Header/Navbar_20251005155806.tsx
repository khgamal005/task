"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Bell,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Routes } from "../constants/enums";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const logo = "/logo.PNG";

  const links = [
    {
      id: crypto.randomUUID(),
      title: "Home",
      href: "#home",
    },
    {
      id: crypto.randomUUID(),
      title: "ourcategory",
      href: Routes.ourcategory,
    },
    {
      id: crypto.randomUUID(),
      title: "AboutUs",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "contactUs",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "FAQs",
      href: Routes.FAQs,
    },
  ];

  return (
<nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: Desktop Logo + Links */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={66}
                height={51}
                className="object-contain opacity-100"
              />
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              {links.map(link => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Icons + Dropdowns */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
            <Bell className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer px-2 py-1 hover:bg-gray-100 rounded">
                EN
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-1 w-24 bg-white shadow-md rounded-md border border-gray-200">
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">EN</DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">AR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer p-1 hover:bg-gray-100 rounded">
                <User className="w-5 h-5" />
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-1 w-32 bg-white shadow-md rounded-md border border-gray-200">
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Profile</DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
  {/* Mobile Menu Button */}
<div className="md:hidden flex items-center justify-between w-full">
  <button onClick={() => setMobileOpen(!mobileOpen)}>
    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>

  {/* Logo on right */}
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


      {/* Mobile Menu */}
{/* Mobile Menu */}
{mobileOpen && (
  <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
    {/* Links */}
    <div className="flex flex-col space-y-2">
      {links.map(link => (
        <Link
          key={link.id}
          href={link.href}
          className="block text-gray-700 hover:text-gray-900 font-medium"
        >
          {link.title}
        </Link>
      ))}
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
      <ShoppingBag className="w-6 h-6 cursor-pointer" />
      <Bell className="w-6 h-6 cursor-pointer" />
      <Heart className="w-6 h-6 cursor-pointer" />
    </div>

    {/* Language Dropdown */}
    <div className="pt-2 border-t border-gray-200">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-left px-4 py-2 border rounded cursor-pointer">
          EN
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 w-full bg-white shadow-md rounded-md border border-gray-200">
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">EN</DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">AR</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* User Dropdown */}
    <div className="pt-2 border-t border-gray-200">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-left px-4 py-2 border rounded flex items-center gap-2 cursor-pointer">
          <User className="w-5 h-5" />
          Account
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 w-full bg-white shadow-md rounded-md border border-gray-200">
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Profile</DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
)}

    </nav>

  );
}
