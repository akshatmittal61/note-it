import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalProvider } from "./Context/GlobalContext";
import Add from "./pages/Add";
import Fab from "./components/Fab";
import Archives from "./pages/Archives";
import Trash from "./pages/Trash";

const App = () => {
	const location = useLocation();
	const navigate = useNavigate();
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
					<Route path="/add" element={<Add />} />
					<Route path="/archive" element={<Archives />} />
					<Route path="/trash" element={<Trash />} />
				</Routes>
			</main>
			{location.pathname !== "/add" && (
				<Fab icon="add" onClick={() => navigate("/add")} />
			)}
		</GlobalProvider>
	);
};

export default App;
