import React, { useState } from "react";
import favicon from "../images/favicon.svg";

const Header = ({ openNav }) => {
	const [gridView, setGridView] = useState(true);
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
				<div className="header-left-logo">
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
				</div>
			</div>
			<div className="header-right">
				<button title="Theme" className="header-right__button icon">
					<span className="material-icons">light_mode</span>
				</button>
				<button
					title="Sync / Refresh"
					className="header-right__button icon"
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
				<button title="Settings" className="header-right__button icon">
					<span className="material-icons">settings</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
