import React from "react";

function services() {
	return (
		<div>
			<div className="flex flex-col p-6 mt-10 text-left bg-gray-100 dark:text-white dark:bg-gray-700">
				<div className="text">
					<h2 className="text-xl font-medium uppercase">Services</h2>
					<h1 className="my-8 text-5xl font-bold">
						We build modern experiences
					</h1>
					<p className="text-2xl font-medium md:w-2/3">
						Coloristy can help visualize even the craziest ideas converting them
						into elegant designs, awesome experiences and catchy brands.
					</p>
				</div>
				<div class="flex mt-8  flex-wrap gap-y-8 sm:py-10 overflow-hidden md:justify-evenly">
					<div className="w-1/2 overflow-hidden md:w-1/6 lg:w-1/5 xl:w-1/6">
						<div className="">
							<div className="text-red-500 fill-current dark:text-yellow-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-24 h-24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<p className="py-2 text-2xl font-bold text-red-500 dark:text-yellow-300">
									Web
								</p>
								<p className="text-xl leading-relaxed text-black dark:text-white">
									Design audit<br></br>UI/UX design<br></br>Prototypying
									<br></br>
									Development
								</p>
							</div>
						</div>
					</div>

					<div className="w-1/2 overflow-hidden md:w-1/6 lg:w-1/5 xl:w-1/6">
						<div className="">
							<div className="text-red-500 fill-current dark:text-yellow-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-24 h-24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
								<p className="py-2 text-2xl font-bold text-red-500 dark:text-yellow-300">
									Mobile apps
								</p>
								<p className="text-xl leading-relaxed text-black dark:text-white">
									Design audit<br></br>UI/UX design<br></br>Prototypying
								</p>
							</div>
						</div>
					</div>

					<div className="w-1/2 overflow-hidden md:w-1/6 lg:w-1/5 xl:w-1/6">
						<div className="">
							<div className="text-red-500 fill-current dark:text-yellow-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-24 h-24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								<p className="py-2 text-2xl font-bold text-red-500 dark:text-yellow-300">
									Branding
								</p>
								<p className="text-xl leading-relaxed text-black dark:text-white">
									Brand identity<br></br>Branding styleguide<br></br>Marketing
									materials
								</p>
							</div>
						</div>
					</div>

					<div className="w-1/2 overflow-hidden md:w-1/6 lg:w-1/5 xl:w-1/6">
						<div className="">
							<div className="text-red-500 fill-current dark:text-yellow-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-24 h-24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
									/>
								</svg>
								<p className="py-2 text-2xl font-bold text-red-500 dark:text-yellow-300">
									Motion
								</p>
								<p className="text-xl leading-relaxed text-black dark:text-white">
									Promo videos<br></br>Interaction design<br></br>Motion
									graphics
								</p>
							</div>
						</div>
					</div>

					<div className="w-1/2 overflow-hidden md:w-1/6 lg:w-1/5 xl:w-1/6">
						<div className="">
							<div className="text-red-500 fill-current dark:text-yellow-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-24 h-24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="py-2 text-2xl font-bold text-red-500 dark:text-yellow-300">
									Illustrations
								</p>
								<p className="text-xl leading-relaxed text-black dark:text-white">
									2D<br></br>3D<br></br>Collage
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default services;
