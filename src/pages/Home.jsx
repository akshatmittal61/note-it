import React, { useContext, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

const Home = () => {
	const {axiosInstance} = useContext(GlobalContext);
	const [allNotes, setAllNotes] = useState([]);
	axiosInstance.get("/api/notes").then((res) => setAllNotes(res.data));
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
							{allNotes.map((note, index) => (
								<Note
									title={note.title}
									content={note.description}
									color={note.color}
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

export default Home;
