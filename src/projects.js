import React from "react";

import image1 from "./Images/cover.png.jpeg";
import image2 from "./Images/cover_1.png.jpeg";
import image3 from "./Images/grid.jpg";
import image4 from "./Images/grid-2.jpg";
import image5 from "./Images/grid.png.jpeg";
import image6 from "./Images/grid-3.jpg";

function projects() {
	return (
		<div>
			<h2 className="mt-10 text-xl font-medium text-left uppercase dark:text-white">
				Projects
			</h2>

			<div className="flex flex-row flex-wrap overflow-hidden">
				<div className="w-full p-4 overflow-hidden md:w-1/2 ">
					<div className="relative duration-300 origin-center transform scale-100 md:w-50 delay-50 hover:scale-90">
						<img
							className="top-0 left-0 w-full duration-300 origin-center transform scale-100 bg-center bg-no-repeat bg-cover delay-50 hover:scale-110"
							src={image1}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white">
							Caricare
						</div>
					</div>
				</div>

				<div className="w-full overflow-hidden md:w-1/2">
					<div className="relative p-4 ">
						<img
							className="w-full duration-300 transform delay-50 hover:scale-90"
							src={image2}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white ">
							Project 1
						</div>
					</div>
				</div>
				<div className="w-full overflow-hidden md:w-1/2">
					<div className="relative p-4 ">
						<img
							className="w-full duration-300 transform delay-50 hover:scale-90"
							src={image3}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white ">
							Project 1
						</div>
					</div>
				</div>
				<div className="w-full overflow-hidden md:w-1/2 ">
					<div className="relative p-4 ">
						<img
							className="w-full duration-300 transform delay-50 hover:scale-90"
							src={image4}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white ">
							Project 1
						</div>
					</div>
				</div>
				<div className="w-full overflow-hidden md:w-1/2">
					<div className="relative p-4 ">
						<img
							className="w-full duration-300 transform delay-50 hover:scale-90"
							src={image5}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white ">
							Project 1
						</div>
					</div>
				</div>
				<div className="w-full overflow-hidden md:w-1/2">
					<div className="relative p-4 ">
						<img
							className="w-full duration-300 transform delay-50 hover:scale-90"
							src={image6}
							alt=""
						></img>
						<div className="absolute top-0 z-10 mt-6 ml-6 text-4xl font-bold text-white ">
							Project 1
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default projects;
