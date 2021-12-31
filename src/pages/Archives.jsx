import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

const Archives = () => {
	const { axiosInstance } = useContext(GlobalContext);
	const [allNotes, setAllNotes] = useState([]);
	useEffect(() => {
		axiosInstance.get("/api/notes").then((res) => setAllNotes(res.data));
	}, []);
	return (
		<section className="archives">
			<div className="archives-head">
				<span className="archives-head__text">Archived Notes</span>
			</div>
			<div className="archives-body">
				<div className="archives-body-content">
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 550: 1, 672: 2, 880: 4 }}
						style={{
							overflodw: "hidden",
						}}
					>
						<Masonry>
							{allNotes.map(
								(note, index) =>
									note.archive && (
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

export default Archives;
