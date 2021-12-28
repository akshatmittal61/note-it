import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const Note = ({ title, content, color = "bgcolor" }) => {
	const { theme } = useContext(GlobalContext);
	return (
		<div className="note-box">
			<div
				className="note"
				style={{
					backgroundColor: `var(--${color}-${theme ? "100" : "700"})`,
				}}
			>
				<div className="note-container">
					<div className="note-title">
						<span className="note-title__text">{title}</span>
					</div>
					<div className="note-content">{content}</div>
				</div>
				<div className="note-controls">
					<button className="note-control" title="Background Color">
						<span className="material-icons">palette</span>
					</button>
					<button className="note-control" title="Background Image">
						<span className="material-icons">wallpaper</span>
					</button>
					<button className="note-control" title="Add to List">
						<span className="material-icons">playlist_add</span>
					</button>
					<button className="note-control" title="Archive Note">
						<span className="material-icons">archive</span>
					</button>
					<button className="note-control" title="Delete Note">
						<span className="material-icons">delete</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;
