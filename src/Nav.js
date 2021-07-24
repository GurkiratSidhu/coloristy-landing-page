import React from "react";

function Nav() {
	return (
		<header>
			<nav className="container flex items-center py-4 mt-4 sm:mt-8">
				<div className="p-1">
					<h1 className="pl-8 text-3xl font-bold text-gray-800 ">Coloristy.</h1>
				</div>
				<ul className="items-center justify-end flex-1 hidden gap-12 text-base text-gray-800 uppercase md:flex">
					<li>
						<a href="/" className="hover:text-gray-400">
							Services
						</a>
					</li>
					<li>
						<a href="/" className="hover:text-gray-400">
							Clients
						</a>
					</li>
					<li>
						<a href="/" className="hover:text-gray-400">
							Careers
						</a>
					</li>
					<li>
						<a href="/" className="hover:text-gray-400">
							About
						</a>
					</li>
					<button
						type="button"
						className="px-4 py-2 font-medium text-white uppercase bg-red-500 rounded-full text-m text-bold hover:bg-red-600"
					>
						Contact Us
					</button>
				</ul>
				<div className="flex justify-end flex-1 md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
