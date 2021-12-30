const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const notes = [
	{
		id: 0,
		title: "Google I/O",
		content:
			"Google I/O is back May 18-20, online, and free for everyone. Join us live., I/O is live keynotes, hands-on learning with Google experts, and a first look at the latest developer products., Make sure to check back for more updates!",
		linkURL: "https://g.co/io",
		linkText: "Google I/O keynote",
		color: "blue",
		image: "",
		list: "",
		archive: false,
		trash: false,
	},
];

app.get("/", (req, res) => {
	res.send(notes);
});
app.get("/api/notes", (req, res) => {
	res.send(notes);
});
app.post("/add", (req, res) => {
	const newNote = req.body;
	notes = [...notes, newNote];
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
