import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import favicon from "../images/favicon.svg";
import Theme from "./theme";

const Header = ({ openNav }) => {
	const [gridView, setGridView] = useState(true);
	const [rotate, setRotate] = useState(false);
	const triggerRotate = () => {
		setRotate(true);
		setTimeout(() => {
			setRotate(false);
		}, 5000);
	};
	const navigate = useNavigate();
	return (
		<header className="header">
			<div className="header-left">
				<div className="header-left-burger">	
					<button
						title="Main Menu"
						className="header-left-burger__button icon"
						onClick={openNav}
					>
						<span className="material-icons">menu</span>
					</button>
				</div>
				<Link className="header-left-logo" to="/">
					<div className="header-left-logo-image">
						<img
							src={favicon}
							alt="Note It"
							className="header-left-logo-image__img"
						/>
					</div>
					<div className="header-left-logo-name">
						<span className="header-left-logo-name__text">
							Note It
						</span>
					</div>
				</Link>
			</div>
			<div className="header-right">
				<Theme />
				<button
					title="Sync / Refresh"
					className="header-right__button icon sync-btn"
					style={{
						transition: "all var(--transition-time) ease-in-out",
						animation: rotate
							? "rotate 1s linear infinite"
							: "none",
					}}
					onClick={triggerRotate}
				>
					<span className="material-icons">sync</span>
				</button>
				<button
					title="Change View"
					className="header-right__button icon"
					onClick={() => setGridView(!gridView)}
				>
					<span className="material-icons">
						{gridView ? "grid_view" : "view_list"}
					</span>
				</button>
				<button
					title="About"
					className="header-right__button icon"
					onClick={() => navigate("/info")}
				>
					<span className="material-icons">info</span>
				</button>
				<button
					title="Contact Us"
					className="header-right__button icon"
					onClick={() => navigate("/contact")}
				>
					<span className="material-icons">contact_support</span>
				</button>
				<button
					title="Settings"
					className="header-right__button icon"
					onClick={() => navigate("/settings")}
				>
					<span className="material-icons">settings</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
