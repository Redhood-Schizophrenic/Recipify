import React from 'react';

const Rating = ({ rating }) => {
	const maxStars = 5;
	const fullStars = Math.floor(rating); // Number of full stars
	const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half-star
	const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars are empty

	return (
		<div className="flex items-center space-x-2">
			{/* Full stars */}
			{Array.from({ length: fullStars }).map((_, index) => (
				<svg
					key={`full-${index}`}
					className="w-5 h-5 text-yellow-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.185a1 1 0 00.95.69h4.391c.969 0 1.371 1.24.588 1.81l-3.558 2.582a1 1 0 00-.364 1.118l1.357 4.185c.3.921-.755 1.688-1.539 1.118l-3.558-2.582a1 1 0 00-1.176 0l-3.558 2.582c-.783.57-1.838-.197-1.539-1.118l1.357-4.185a1 1 0 00-.364-1.118L2.66 9.612c-.783-.57-.38-1.81.588-1.81h4.391a1 1 0 00.95-.69l1.357-4.185z" />
				</svg>
			))}

			{/* Half star */}
			{hasHalfStar && (
				<svg
					className="w-5 h-5 text-yellow-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<defs>
						<clipPath id="vertical-half">
							<rect x="0" y="0" width="10" height="20" />
						</clipPath>
					</defs>
					<path
						d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 18z"
						fill="currentColor"
						clipPath="url(#vertical-half)"
					/>
					<path
						d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 18z"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						className="text-gray-300"
					/>
				</svg>
			)}

			{/* Empty stars */}
			{Array.from({ length: emptyStars }).map((_, index) => (
				<svg
					key={`empty-${index}`}
					className="w-5 h-5 text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.185a1 1 0 00.95.69h4.391c.969 0 1.371 1.24.588 1.81l-3.558 2.582a1 1 0 00-.364 1.118l1.357 4.185c.3.921-.755 1.688-1.539 1.118l-3.558-2.582a1 1 0 00-1.176 0l-3.558 2.582c-.783.57-1.838-.197-1.539-1.118l1.357-4.185a1 1 0 00-.364-1.118L2.66 9.612c-.783-.57-.38-1.81.588-1.81h4.391a1 1 0 00.95-.69l1.357-4.185z" />
				</svg>
			))}

			{/* Numeric rating */}
			<span className="font-medium ml-2">
				{rating.toFixed(1)}
			</span>
		</div>
	);
};


export default Rating;
