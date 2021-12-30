import React from "react";
import Button from "../components/Button";

const Add = () => {
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<section className="add">
			<div className="add-head">
				<span className="add-head__text">Add A Note</span>
			</div>
			<div className="add-body">
				<form className="add-form">
					<input
						className="add-form__input"
						type="text"
						name="title"
						placeholder="Title Here"
						onChange={handleChange}
					/>
					<textarea
						className="add-form__input"
						name="content"
						placeholder="Your Note"
						onChange={handleChange}
						rows="7"
						required
					></textarea>
					<input
						className="add-form__input"
						type="url"
						name="linkURL"
						placeholder="Link to attach (url) (optional)"
						onChange={handleChange}
					/>
					<input
						className="add-form__input"
						type="text"
						name="linkText"
						placeholder="Text to display for link (optional)"
						onChange={handleChange}
					/>
					<input
						className="add-form__input"
						name="list"
						placeholder="List (optional)"
						onChange={handleChange}
						list="listNames"
					/>
					<datalist id="listNames">
						<option value="Work" />
						<option value="Home" />
						<option value="Personal" />
						<option value="Poems" />
						<option value="Write Ups" />
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
