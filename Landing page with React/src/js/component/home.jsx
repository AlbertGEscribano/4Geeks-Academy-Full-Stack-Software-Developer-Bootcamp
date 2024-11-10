import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<div><Navbar /></div>
			
				<div class="container">

							<div class="d-flex justify-content-center text-start mt-5">
								<Jumbotron />
							</div>							
						
							

							<div class = "row mb-4 m-auto justify-content-center">
								<div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3"><Cards /></div>
								<div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3"><Cards /></div>
								<div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3"><Cards /></div>
								<div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3"><Cards /></div>
							</div>
							

				</div>
					
					<div><Footer /></div>
			
		</div>
	);
};

export default Home;
