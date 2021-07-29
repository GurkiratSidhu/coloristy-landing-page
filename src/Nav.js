import React from "react";
import Toggle from "./toggle";

function Nav() {
	return (
		<header className="">
			<nav className="flex items-center justify-between py-4 pt-4 ">
				<div className="p-1">
					<h1 className="text-3xl font-bold text-gray-800 dark:text-white">
						Coloristy.
					</h1>
				</div>
				<div className="flex flex-row items-center right side stuff">
					<div className="items-center list and button ">
						<ul className="items-center hidden text-lg text-gray-800 uppercase gap-14 dark:text-white md:flex">
							<li>
								<a href="/" className="hover:text-gray-400">
									Work
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-gray-400">
									Services
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-gray-400">
									Company
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-gray-400">
									Blog
								</a>
							</li>
							<button
								type="button"
								className="px-5 py-2 mr-5 font-medium text-white uppercase bg-red-500 rounded-full dark:text-black dark:bg-yellow-300 text-m text-bold hover:bg-red-600"
							>
								Contact Us
							</button>
						</ul>
					</div>

					<div className="flex flex-row items-center toggle and hamburger">
						<Toggle />
						<div className="flex justify-end flex-1 mx-4 md:hidden dark:text-white">
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
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
