import React from "react";

function footer() {
	return (
		<div>
			<div className="mt-10 space-y-6 text-left text-black dark:text-white">
				<h3 className="text-base text-xl uppercase">Hire Us</h3>
				<h2 className="text-4xl font-bold">A project with Coloristy?</h2>
				<h3 className="text-base text-xl font-semibold ">Services</h3>

				<div className="space-x-1 space-y-2 pills">
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Interface Design
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Illustration
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Identity
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Development
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Animation
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						Webflow
					</button>
				</div>
				<h3 className="text-base text-xl font-semibold ">Budget in USD</h3>
				<div className="flex gap-1 pills">
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						5k-10k
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						10k-50k
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">
						more than 50k
					</button>
				</div>

				<form className="py-2 space-y-6 ">
					<label className="block">
						<input
							className="w-full px-2 py-1 mr-3 text-xl font-semibold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none dark:placeholder-white focus:outline-none"
							type="email"
							placeholder="Name"
							inputmode="text"
							required
						/>
					</label>
					<label className="block">
						<input
							className="w-full px-2 py-1 mr-3 text-xl font-semibold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none dark:placeholder-white focus:outline-none"
							type="email"
							placeholder="Email"
							inputmode="email"
							required
						/>
					</label>
					<label className="block">
						<input
							className="w-full px-2 py-1 mr-3 text-xl font-semibold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none dark:placeholder-white focus:outline-none"
							type="email"
							placeholder="Project details (optional)"
							inputmode="text"
							required
						/>
					</label>

					<input
						type="submit"
						className="w-full py-3 text-white bg-red-500 dark:bg-yellow-300"
						value="Send"
					/>
				</form>
			</div>
		</div>
	);
}

export default footer;
