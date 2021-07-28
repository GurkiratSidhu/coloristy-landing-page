import React from "react";
import desk from "./Images/desk.jpg";

function Header() {
	return (
		<>
			<section className="flex flex-col md:items-center md:flex-row justify-evenly">
				<div className="pr-10">
					<p className="hidden text-5xl font-bold text-left lg:text-8xl align-left dark:text-white md:flex mt-14">
						Design, <br></br> Development, <br></br> and identity for <br></br>
						your product.
					</p>
					<p className="flex text-5xl font-bold text-left dark:text-white md:hidden mt-14">
						Design,<br></br>Development,<br></br>and identity for<br></br>your
						product.
					</p>

					<p className="flex mt-10 mb-5 ">
						<a
							href="/"
							className="text-2xl font-bold text-left text-red-500 dark:text-yellow-300 dark:text-red-500 dark:text-white hover:text-blue-500 bg-auro "
						>
							Let's create something together.
						</a>
					</p>
				</div>

				<div className="p-2 md:w-1/2">
					<img
						className="duration-300 transform delay-50 hover:scale-90"
						src={desk}
						alt=""
					></img>
				</div>
			</section>
		</>
	);
}

export default Header;
