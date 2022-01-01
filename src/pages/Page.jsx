import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

const Page = ({ listName }) => {
	const { axiosInstance } = useContext(GlobalContext);
	const [allNotes, setAllNotes] = useState([]);
	useEffect(() => {
		axiosInstance.get("/api/notes").then((res) => {
			let response = res.data;
			response.map((item) => {
				if (item.list === listName) setAllNotes([...allNotes, item]);
			});
		});
	}, []);
	return (
		<section className="archives">
			<div className="archives-head">
				<span className="archives-head__text">{listName}</span>
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
									note.list === listName && (
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

export default Page;
