import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import favicon from '../images/favicon.svg'

const Note = ({
	title,
	content,
	linkURL,
	linkText,
	color = "bgcolor",
	image,
}) => {
	const { theme } = useContext(GlobalContext);
	return (
		<div className="note-box">
			<div
				className="note"
				style={{
					backgroundColor: `var(--${color}-${theme ? "100" : "700"})`,
					backgroundImage: `url(http://www.transparenttextures.com/patterns/${image}.png)`,
				}}
			>
				<div className="note-container">
					<div className="note-title">
						<span className="note-title__text">{title}</span>
						<a href={linkURL} target={(linkURL === "" || linkURL === "#") ? "_self" : "_blank"} rel="noreferrer">
                            <img src={(linkURL !== "" && linkURL !== "#") ? "https://s2.googleusercontent.com/s2/favicons?domain_url=" + linkURL : favicon} className="note-head__img" alt="note link favicon" />
                        </a>
					</div>
					<div className="note-content">{content}</div>
					<div className="note-content">
						<a href={linkURL} target={(linkURL === "" || linkURL === "#") ? "_self" : "_blank"} rel="noreferrer">{linkText}</a>
					</div>
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
