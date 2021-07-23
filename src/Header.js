import React from "react";
import desk from "./Images/desk.jpg";

function Header() {
	return (
		<>
			<h1 className="flex justify-start mx-10 mt-12 font-medium text-gray-700">
				Featured Projects
			</h1>
			<p className="flex justify-start mx-10 text-5xl mt-14 font-extralight">
				Project Name
			</p>
			<p className="flex justify-start mx-10 text-5xl font-thin text-gray-400">
				Looking under the hood
			</p>
			<p className="flex justify-start mx-10 font-bold text-gray-900 m-14">
				More Projects
			</p>

			<div className="mx-10 ">
				<img
					className="duration-300 transform delay-50 hover:scale-90"
					src={desk}
					alt=""
				></img>
			</div>
		</>
	);
}

export default Header;
