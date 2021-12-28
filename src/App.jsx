import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const App = () => {
	const location = useLocation();
	AOS.init();
	const [showNav, setShowNav] = useState(false);
	useEffect(() => {
		setShowNav(false);
	}, [location.pathname]);
	const axiosInstance = axios.create({
		baseURL: "",
	});
	return (
		<>
			<Header openNav={() => setShowNav(true)} />
			{showNav && <Navigation closeNav={() => setShowNav(false)} />}
			<main></main>
		</>
	);
};

export default App;
