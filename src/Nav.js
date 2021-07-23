import React from "react";

function Nav() {
	return (
		<div className="container bg-gray-200 ">
			<div className="flex">
				<h1 className="text-5xl font-bold text-gray-700 text-5xlxl ">
					Coloristy
				</h1>
				<ul className="flex items-center p-5 text-xl font-bold text-gray-700 uppercase center ">
					<li>Services</li>
					<li>Clients</li>
					<li>Careers</li>
					<li>About</li>
				</ul>
				<button className="px-6 py-2 text-4xl text-white bg-red-500 rounded-full ">
					Contact Us
				</button>
			</div>
		</div>
	);
}

export default Nav;
