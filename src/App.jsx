import React, { useContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import GlobalContext from "./Context/GlobalContext";
import Add from "./pages/Add";
import Fab from "./components/Fab";
import Archives from "./pages/Archives";
import Trash from "./pages/Trash";
import _ from "lodash";
import Page from "./pages/Page";

const App = () => {
	const location = useLocation();
	const navigate = useNavigate();
	AOS.init();
	const { axiosInstance } = useContext(GlobalContext);
	const [lists, setLists] = useState([]);
	const [showNav, setShowNav] = useState(false);
	useEffect(() => {
		axiosInstance.get("/api/lists").then((res) => setLists(res.data));
	});
	useEffect(() => {
		setShowNav(false);
	}, [location.pathname]);
	return (
		<>
			<Header openNav={() => setShowNav(true)} />
			{showNav && <Navigation closeNav={() => setShowNav(false)} />}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Add />} />
					{lists.map((list, index) => (
						<Route
							path={`/${_.kebabCase(list)}`}
							element={<Page listName={list} />}
							key={index}
						/>
					))}
					<Route path="/archive" element={<Archives />} />
					<Route path="/trash" element={<Trash />} />
				</Routes>
			</main>
			{location.pathname !== "/add" && (
				<Fab icon="add" onClick={() => navigate("/add")} />
			)}
		</>
	);
};

export default App;
