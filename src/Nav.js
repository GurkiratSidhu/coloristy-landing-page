import React from "react";

function Nav() {
	return (
		<div className="">
			<nav className="flex justify-between p-8">
				<h1 className="text-3xl font-bold text-gray-800 text-5xlxl">
					Coloristy.
				</h1>

				<ul className="flex items-center text-xl font-bold text-gray-600 uppercase ">
					<li>
						<a href="/" className="mx-2 hover:text-gray-400">
							Services
						</a>
					</li>
					<li>
						<a href="/" className="mx-2 hover:text-gray-400">
							Clients
						</a>
					</li>
					<li>
						<a href="/" className="mx-2 hover:text-gray-400">
							Careers
						</a>
					</li>
					<li>
						<a href="/" className="mx-2 hover:text-gray-400">
							About
						</a>
					</li>
				</ul>
				<button className="px-5 font-bold text-white uppercase bg-red-500 rounded-full text-m text-bold hover:bg-red-600">
					Contact Us
				</button>
			</nav>
		</div>
	);
}

export default Nav;
