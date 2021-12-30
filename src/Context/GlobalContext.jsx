import React, { useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);
	const [gridView, setGridView] = useState(true);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
	});
	return (
		<GlobalContext.Provider
			value={{theme, setTheme, gridView, setGridView, axiosInstance}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
