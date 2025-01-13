
function Feature1() {
	return (
		<section className="bg-black h-[100dvh] w-full flex justify-between p-[10dvw]">

			{/* Left Container */}
			<div className="w-1/2 h-full">
			</div>

			{/* Right Container */}
			<div className="w-1/2 h-full flex flex-col justify-center">
				<h1 className="text-4xl text-orange-500 pb-4 uppercase font-bold"> Find Exclusive Recipes </h1>
				<div className="flex flex-col gap-3">
					<p className="text-xl">
						The platform allows users to share detailed recipes, complete with ingredients, instructions, cooking times, and photos.
					</p>
					<p className="text-xl">
						Advanced search filters make it easy to find recipes based on cuisine. Recipes can be rated and reviewed, providing valuable feedback to creators.
					</p>
					<p className="text-xl">
						<strong>Save and Organize</strong> feature lets users categorize favorite recipes into collections like <strong>Quick Meals</strong> or <strong>Desserts.</strong>
					</p>
					<p className="text-xl">
						Video tutorials and step-by-step instructions enhance the cooking experience.
					</p>
				</div>
			</div>

		</section>
	)
}

export default Feature1
