"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { Bookmark, Grid, Link } from 'lucide-react';
import { posts } from '@/app/data/posts';

function UserProfile() {
	const [isPosts, setisPosts] = useState(true);

	return (
		<div className="bg-black min-h-screen flex justify-center">
			<div className="p-4 lg:w-[60%] md:w-[80%] sm:w-full">

				{/* Profile Section */}
				<div className="px-6 w-full">
					<div className="flex justify-center items-center md:items-start gap-6 md:gap-16 w-full flex-col md:flex-row">
						<Image
							src={`/profile/profilepic.jpeg`}
							alt="Profile"
							width={1000}
							height={1000}
							className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full object-cover"
						/>
						<div className="flex flex-col">
							<h1 className="mt-4 text-2xl font-semibold">User Profile</h1>
							<p className="text-orange-600 pb-4">@user123</p>

							<p className="text-gray-400">
								Enthusiast Cook with working experience of 5 years.
							</p>
							<a href="https://www.instagram.com/appnichetechnology/?hl=en" className='text-gray-600 flex gap-2'>
								<Link className="w-4 h-4 mt-1" />
								<p className='text-blue-600'>
									Instagram
								</p>
							</a>
						</div>
					</div>

					<div className="flex justify-center pb-8">
						<button className="mt-4 w-full max-w-xs px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:shadow-orange-600 hover:shadow transition-shadow duration-500">
							Edit Profile
						</button>
					</div>

					<div className="flex flex-1 justify-around text-xs md:text-base border-y border-gray-500 p-4">
						<div className="text-center">
							<div className="font-semibold">Posts</div>
							<div>45</div>
						</div>
						<div className="text-center">
							<div className="font-semibold">Followers</div>
							<div>10</div>
						</div>
						<div className="text-center">
							<div className="font-semibold">Following</div>
							<div>0</div>
						</div>
					</div>

					<div className="flex flex-1 justify-around text-md p-2">
						<div className="text-center">
							<button
								onClick={() => { setisPosts(true) }}
								className={`flex-1 flex justify-center gap-10 py-3 border-t-2 border-black 
                                    ${isPosts ? "font-semibold text-orange-600" : ""}`}
							>
								<div className='flex gap-2'>
									<Grid className="w-6 h-6 mx-auto" />
									<h1 className='hidden sm:block'>Posts</h1>
								</div>
							</button>
						</div>
						<div className="text-center">
							<button
								onClick={() => { setisPosts(false) }}
								className={`flex-1 flex justify-center gap-10 py-3 border-t-2 border-black 
                                    ${!isPosts ? "font-semibold text-orange-600" : ""}`}
							>
								<div className='flex gap-2 text-sm sm:text-md'>
									<Bookmark className="w-6 h-6 mx-auto" />
									<h1 className='hidden sm:block'>Saved</h1>
								</div>
							</button>
						</div>
					</div>

					<div className="flex">
						{/* Posts Grid */}
						{
							isPosts ? (
								< div className="grid grid-cols-2 md:grid-cols-3 gap-[4px]">
									{posts.map((post) => (
										<div key={post.id} className="aspect-square overflow-hidden rounded-lg">
											<img
												src={post.image}
												alt={post.alt}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
							) :
								""
						}
					</div>

				</div>
			</div>
		</div >
	)
}

export default UserProfile
