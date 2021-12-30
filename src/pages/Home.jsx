import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

const Home = () => {
	const { axiosInstance } = useContext(GlobalContext);
	const [allNotes, setAllNotes] = useState([]);
	useEffect(() => {
		axiosInstance.get("/api/notes").then((res) => setAllNotes(res.data));
	}, []);
	return (
		<section className="home">
			<div className="home-head">
				<span className="home-head__text">All Notes</span>
			</div>
			<div className="home-body">
				<div className="home-body-content">
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 550: 1, 672: 2, 880: 4 }}
						style={{
							overflodw: "hidden",
						}}
					>
						<Masonry>
							{allNotes.map(
								(note, index) =>
									!note.archive &&
									!note.trash && (
										<Note
											title={note.title}
											content={note.content}
											linkURL={note.linkURL}
											linkText={note.linkText}
											color={note.color}
											image={note.image}
											archive={note.archive}
											trash={note.trash}
											key={index}
										/>
									)
							)}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
		</section>
	);
};

export default Home;
