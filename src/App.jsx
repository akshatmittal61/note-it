import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { GlobalProvider } from "./Context/GlobalContext";

const App = () => {
	const location = useLocation();
	AOS.init();
	const [showNav, setShowNav] = useState(false);
	useEffect(() => {
		setShowNav(false);
	}, [location.pathname]);
	return (
		<GlobalProvider>
			<Header openNav={() => setShowNav(true)} />
			{showNav && <Navigation closeNav={() => setShowNav(false)} />}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
		</GlobalProvider>
	);
};

export default App;
