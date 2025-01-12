"use client";

import { Menu, Search, Home, Book, Coffee, UtensilsCrossed as Recipe, CircleUserRound, X } from 'lucide-react';
import { useState } from 'react'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<Recipe className="w-8 h-8 text-orange-500" />
						<span className="text-white font-semibold text-lg">Recipify</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<a href="/" className="text-white/80 hover:text-white flex items-center gap-2">
							<Home className="w-4 h-4" />
							Home
						</a>
						<a href="/profile" className="text-white/80 hover:text-white flex items-center gap-2">
							<Book className="w-4 h-4" />
							Recipes
						</a>
						<a href="/about" className="text-white/80 hover:text-white flex items-center gap-2">
							<Coffee className="w-4 h-4" />
							About us
						</a>
						<a href="/profile" className="text-white/80 hover:text-white flex items-center gap-2">
							<CircleUserRound className='w-4 h-4' />
							Profile
						</a>
					</div>

					{/* Search and Mobile Menu */}
					<div className="flex items-center gap-4">
						<button className="text-white/80 hover:text-white">
							<Search className="w-5 h-5" />
						</button>
						<button
							className="md:hidden text-white/80 hover:text-white"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{
								!isMenuOpen ? (

									<Menu className="w-6 h-6" />
								) : (

									<X className="w-6 h-6" />
								)
							}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute md:hidden bg-black/60 backdrop-blur-lg w-full">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a href="#" className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Home
						</a>
						<a href="#" className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Recipes
						</a>
						<a href="#" className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							About
						</a>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
