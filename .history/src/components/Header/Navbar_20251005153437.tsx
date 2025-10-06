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
          {/* Left / Logo */}
          <div
            className="flex items-center"
            style={{ marginTop: "20px", marginLeft: "120px" }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={66} // rounded from 65.948
                height={51}
                className="object-contain opacity-100"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
            <Bell className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-2 py-1 border rounded cursor-pointer">
                EN
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>EN</DropdownMenuItem>
                <DropdownMenuItem>AR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Dropdown */}
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              {link.title}
            </Link>
          ))}

          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6" />
            <Bell className="w-6 h-6" />
            <Heart className="w-6 h-6" />
          </div>

          {/* Mobile Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-2 py-1 border rounded cursor-pointer">
              EN
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>EN</DropdownMenuItem>
              <DropdownMenuItem>AR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-2 py-1 border rounded flex items-center gap-1 cursor-pointer">
              <User className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}
