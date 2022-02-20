import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

const Trash = () => {
	const { axiosInstance, gridView } = useContext(GlobalContext);
	const [allNotes, setAllNotes] = useState([]);
	useEffect(() => {
		axiosInstance.get("/api/bin").then((res) => setAllNotes(res.data));
	}, []);
	return (
		<section className="bin">
			<div className="bin-head">
				<span className="bin-head__text">Trash Notes</span>
			</div>
			<div className="bin-body">
				<div className="bin-body-content">
					<ResponsiveMasonry
						columnsCountBreakPoints={{
							550: 1,
							672: gridView ? 2 : 1,
							880: gridView ? 4 : 1,
						}}
						style={{
							overflodw: "hidden",
						}}
					>
						<Masonry>
							{allNotes.map((note, index) => (
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
							))}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
		</section>
	);
};

export default Trash;
