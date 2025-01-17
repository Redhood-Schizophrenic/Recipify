"use client";

import { Dumbbell, Gift, Utensils } from 'lucide-react'
import { recipe as recipes } from '../data';
import React, { useState } from 'react'
import Rating from './Ratings';

function RecipePage() {

	const [selectedCategory, setselectedCategory] = useState('Categories')

	return (
		<div className='bg-black'>
			<div className="flex justify-center p-4 w-full">
				<h1 className="lg:text-3xl md:text-xl sm:text-base flex font-semibold text-orange-300">Browse Recipes Categories</h1>
			</div>

			{/* Navbar */}
			<div className="flex flex-wrap justify-center gap-6 md:gap-16 p-6">
				<div
					onClick={() => setselectedCategory("Categories")}
					className={`flex hover:text-orange-300 gap-2 cursor-pointer ${selectedCategory === "Categories" ? ("text-orange-300") : ""}`}
				>
					<Utensils className='lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4' />
					<h1 className='lg:text-xl md:text-base sm:text-sm'> Categories </h1>
				</div>
				<div
					onClick={() => setselectedCategory("Cusines")}
					className={`flex hover:text-orange-300 gap-2 cursor-pointer ${selectedCategory === "Cusines" ? ("text-orange-300") : ""}`}
				>
					<Gift className='lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4' />
					<h1 className='lg:text-xl md:text-base sm:text-sm'> Cusines </h1>
				</div>
				<div
					onClick={() => setselectedCategory("Dietary")}
					className={`flex hover:text-orange-300 gap-2 cursor-pointer ${selectedCategory === "Dietary" ? ("text-orange-300") : ""}`}
				>
					<Dumbbell className='lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4' />
					<h1 className='lg:text-xl md:text-base sm:text-sm'> Dietary </h1>
				</div>
			</div>

			{/* Category Wise */}
			<div className="flex justify-center pt-10">
				< div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[60%]">
					{
						recipes
							.filter((recipe) => { return recipe.identifier === selectedCategory })
							.map((recipe) => (
								<div key={recipe.id} className='bg-gray-800 opacity-100 sm:opacity-70 hover:opacity-100 transition-opacity duration-500 rounded-xl'>
									<div className="aspect-square overflow-hidden">
										<img
											src={recipe.image}
											alt={recipe.name}
											className="w-full h-full object-cover rounded-t-xl"
										/>
									</div>
									<h1 className='text-white text-xl p-4'> {recipe.name} </h1>
									<div className='px-4 pb-4 text-base font-semibold'>
										<Rating rating={recipe.rating} />
									</div>
								</div>
							))
					}
				</div>
			</div>
		</div >
	)
}

export default RecipePage
