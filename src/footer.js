import React from "react";

function footer() {
	return (
		<div className="flex-row md:flex">
			<div className="mt-10 space-y-5 text-left text-black md:mx-10 md:order-2 md:w-2/3 dark:text-white">
				<h3 className="text-base text-xl uppercase">Hire Us</h3>
				<h2 className="text-4xl font-bold">A project with Coloristy?</h2>
				<h3 className="text-base text-xl font-semibold ">Services</h3>

				<div className="space-x-1 space-y-2 pills">
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Interface Design
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Illustration
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Identity
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Development
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Animation
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						Webflow
					</button>
				</div>
				<h3 className="pt-6 text-base text-xl font-semibold ">Budget in USD</h3>
				<div className="flex gap-1 pills">
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						5k-10k
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						10k-50k
					</button>
					<button class="bg-gray-200 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full">
						more than 50k
					</button>
				</div>

				<form className="py-2 pt-8 space-y-10 ">
					<div className="space-y-8 md:space-y-0 md:flex md:justify-between ">
						<label className="block">
							<input
								className="w-full px-2 py-1 pb-4 mr-3 text-xl font-bold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none md:w-80 dark:placeholder-white focus:outline-none"
								type="email"
								placeholder="Name"
								inputmode="text"
								required
							/>
						</label>
						<label className="block">
							<input
								className="w-full px-2 py-1 pb-4 mr-3 text-xl font-bold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none md:w-80 dark:placeholder-white focus:outline-none"
								type="email"
								placeholder="Email"
								inputmode="email"
								required
							/>
						</label>
					</div>

					<label className="block">
						<input
							className="w-full px-2 py-1 pb-4 mr-3 text-xl font-bold leading-tight text-gray-700 placeholder-black bg-transparent border-b-2 appearance-none dark:placeholder-white focus:outline-none"
							type="email"
							placeholder="Project details (optional)"
							inputmode="text"
							required
						/>
					</label>

					<input
						type="submit"
						className="w-full py-3 text-2xl text-white bg-red-500 rounded-md md:w-1/3 dark:text-black dark:bg-yellow-300"
						value="Send"
					/>
				</form>
			</div>
			<div className="pl-4 pr-10 mt-10 text-left text-white bg-gray-900 md:pl-0 md:bg-white md:text-black md:order-1 md:w-1/3 dark:bg-gray-700">
				<div>
					<h2 className="py-10 text-4xl font-bold ">Coloristy</h2>

					<h2 className="pt-6 text-base uppercase">Contacts</h2>
					<h2 className="pt-2 text-2xl font-medium">mail@coloristy.com</h2>
				</div>

				<div className="pb-10 social">
					<h2 className="pt-12 pb-4 text-base uppercase">Follow</h2>

					<div className="flex pb-12 justify-evenly socialicons">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer;
