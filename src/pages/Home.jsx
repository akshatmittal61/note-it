import React, { useContext, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Note from "../components/Note";
import GlobalContext from "../Context/GlobalContext";

/*{
		id: 0,
		title: "Google I/O",
		content:
			"Google I/O is back May 18-20, online, and free for everyone. Join us live., I/O is live keynotes, hands-on learning with Google experts, and a first look at the latest developer products., Make sure to check back for more updates!",
		linkURL: "https://g.co/io",
		linkText: "Google I/O keynote",
		color: "bgcolor",
		image: "",
		list: "",
		archive: false,
		trash: false,
	} */
const Home = () => {
	const { axiosInstance } = useContext(GlobalContext);
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
									content={note.content}
									linkURL={note.linkURL}
									linkText={note.linkText}
									color={note.color}
									image={note.image}
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
