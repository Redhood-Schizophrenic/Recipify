"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, UtensilsCrossed, ChefHat } from 'lucide-react';
import { recipeSlider as recipes } from '../data/recipeSlider';
import Link from 'next/link';
import Navbar from './Navbar';

function App() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState('');
	const [sliding, setSliding] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const nextSlide = () => {
		if (sliding) return;
		setSliding(true);
		setDirection('left');
		setCurrentIndex((prev) => (prev + 1) % recipes.length);
		setTimeout(() => setSliding(false), 500);
	};

	const prevSlide = () => {
		if (sliding) return;
		setSliding(true);
		setDirection('right');
		setCurrentIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
		setTimeout(() => setSliding(false), 500);
	};

	// Auto-scrolling effect
	useEffect(() => {
		let interval;

		if (!isPaused) {
			interval = setInterval(() => {
				nextSlide();
			}, 5000);
		}

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [currentIndex, sliding, isPaused]);

	// Pause auto-scrolling when hovering over the slider
	const handleMouseEnter = () => setIsPaused(true);
	const handleMouseLeave = () => setIsPaused(false);

	return (
		<div
			className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-y-hidden"
			style={{ backgroundImage: `url(${recipes[currentIndex].image})` }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

			{/* Navbar */}
			<Navbar />

			<div className='flex'>
				<div className='flex justify-center items-center px-4'>
					<button
						onClick={prevSlide}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
					>
						<ChevronLeft className="w-5 h-5 md:w-10 md:h-10 text-white" />
					</button>
				</div>

				{/* Main Content */}
				<main className="relative z-10 min-h-[calc(100vh-6rem)] flex items-center justify-center p-4 overflow-hidden w-full">
					<div
						className="w-full max-w-[80dvw] max-h-[80dvh] bg-black/45 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{/* Content Container */}
						<div
							className={`relative flex flex-col md:flex-row h-full transform transition-transform duration-500 ease-out ${sliding ? (direction === 'right' ? 'translate-x-full' : '-translate-x-full') : 'translate-x-0'
								}`}
						>
							{/* Left Content */}
							<div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col justify-center">
								<h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight w-full">
									{recipes[currentIndex].name}
								</h2>

								<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 sm:grid-cols-2 gap-6 mb-6 w-full">
									<div className="flex items-center gap-2 text-white/80">
										<Clock className="w-4 h-4 md:w-6 md:h-6 sm:w-[5dvw] sm:h-[5dvw]" />
										<div>
											<p className="text-md text-white/60">Prep Time</p>
											<p className="text-sm md:text-base font-medium">{recipes[currentIndex].prepTime}</p>
										</div>
									</div>
									<div className="flex items-center gap-2 text-white/80">
										<UtensilsCrossed className="w-4 h-4 md:w-6 md:h-6" />
										<div>
											<p className="text-md text-white/60">Cook Time</p>
											<p className="text-sm md:text-base font-medium">{recipes[currentIndex].cookTime}</p>
										</div>
									</div>
									<div className="flex items-center gap-2 text-white/80">
										<Users className="w-4 h-4 md:w-6 md:h-6" />
										<div>
											<p className="text-md text-white/60">Servings</p>
											<p className="text-sm md:text-base font-medium">{recipes[currentIndex].servings}</p>
										</div>
									</div>
								</div>

								<button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all w-fit text-sm md:text-base">
									Learn More
								</button>

								<div className="mt-6 md:mt-8 flex items-center gap-3">
									<ChefHat className="w-4 h-4 md:w-6 md:h-6 text-white/60" />
									<p className="text-white/60 text-md">
										Recipe by &nbsp;
										<Link href={`/users/${recipes[currentIndex].author}`} className='underline'>
											{recipes[currentIndex].author}
										</Link>
									</p>
								</div>
							</div>

							{/* Right Content - Main Image */}
							<div className="hidden lg:flex w-1/2 px-10 pb-6 items-center justify-center">
								<img
									src={recipes[currentIndex].image}
									alt={recipes[currentIndex].name}
									className="w-full h-[calc(100-20)%] object-cover rounded-2xl shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</main>

				<div className='flex justify-center items-center px-4'>
					<button
						onClick={nextSlide}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
					>
						<ChevronRight className="w-5 h-5 md:w-10 md:h-10 text-white" />
					</button>
				</div>


			</div>

		</div>
	);
}

export default App;
