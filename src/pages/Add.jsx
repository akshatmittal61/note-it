import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import GlobalContext from "../Context/GlobalContext";

const Add = () => {
	const navigate = useNavigate();
	const { axiosInstance } = useContext(GlobalContext);
	const [lists, setLists] = useState([]);
	const [note, setNote] = useState({
		title: "",
		content: "",
		linkURL: "",
		linkText: "",
		color: "",
		image: "",
		list: "",
		archive: false,
		trash: false,
	});
	useEffect(() => {
		axiosInstance.get("/api/lists").then((res) => setLists(res.data));
	}, []);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote({
			...note,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(note);
		let newNote = {
			...note,
		};
		axiosInstance
			.post("/api/new", newNote)
			.then((res) => {
				console.log(res.data);
				navigate("/");
			})
			.catch((err) => console.log(err));
	};
	return (
		<section className="add">
			<div className="add-head">
				<span className="add-head__text">Add A Note</span>
			</div>
			<div className="add-body">
				<form className="add-form" onSubmit={handleSubmit}>
					<input
						className="add-form__input"
						type="text"
						name="title"
						placeholder="Title Here"
						value={note.title}
						onChange={handleChange}
					/>
					<textarea
						className="add-form__input"
						name="content"
						placeholder="Your Note"
						value={note.content}
						onChange={handleChange}
						rows="7"
						required
					></textarea>
					<input
						className="add-form__input"
						type="url"
						name="linkURL"
						placeholder="Link to attach (url) (optional)"
						value={note.linkURL}
						onChange={handleChange}
					/>
					<input
						className="add-form__input"
						type="text"
						name="linkText"
						placeholder="Text to display for link (optional)"
						value={note.linkText}
						onChange={handleChange}
					/>
					<input
						className="add-form__input"
						name="list"
						placeholder="List (optional)"
						value={note.list}
						onChange={handleChange}
						list="listNames"
					/>
					<datalist id="listNames">
						{lists.map((name, index) => (
							<option value={name} key={index} />
						))}
					</datalist>
					<div className="add-form-controls">
						<button className="add-form__control icon icon-sm">
							<span className="material-icons">palette</span>
						</button>
						<button className="add-form__control icon icon-sm">
							<span className="material-icons">wallpaper</span>
						</button>
					</div>
					<div className="add-form-buttons">
						<Button text="Cancel" color="trasnparent" />
						<Button text="Save" type="submit" color="trasnparent" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Add;
