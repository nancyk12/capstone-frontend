import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import PhotoUpload from "./PhotoUpload";
import { Link } from "react-router-dom"

export default function EditBlog(props) {
	// const [imageInput, setImageInput] = useState("");
	const [titleInput, setTitleInput] = useState("");
	const [textInput, setTextInput] = useState("");
	const [authorInput, setAuthorInput] = useState("");
	const [categoriesInput, setCategoriesInput] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();
	const url = "http://localhost:5005";

	useEffect(() => {
		const foundBlog = props.blogsProps.find((blog) => {
			return blog.id === id;
		});
		// setImageInput(foundBlog.image);
		setTitleInput(foundBlog.title);
		setTextInput(foundBlog.text);
		setAuthorInput(foundBlog.author);
		setCategoriesInput(foundBlog.category);
	}, [id, props.blogsProps]);

	const handleOnSubmit = async () => {
		props.setShouldRefreshProps(true);
		const updatedData = {
			// image: imageInput,
			title: titleInput,
			text: textInput,
			author: authorInput,
			category: categoriesInput,
		};
		const response = await axios.put(
			`${url}/blogs/update-by-id/${id}`,
			updatedData
		);
		props.setShouldRefreshProps(false);
		navigate("/blogs");
	};
	return (
		<div className="login-container">
			<h2>Edit Blog</h2>
			<br/>
			<form className="login-form" onSubmit={handleOnSubmit}>
				{/* <label>Image:</label>
				<PhotoUpload
				onChange={(e) => {
					setImageInput(e.target.value);
				}}
				/> */}
					<br />
				<label>Title:</label>
				<input
					type="text"
					value={titleInput}
					name="title"
					onChange={(e) => {
						setTitleInput(e.target.value);
					}}
				/>
				<br />
				<label>Text:</label>
				<textarea
					type="text"
					value={textInput}
					name="text"
					onChange={(e) => {
						setTextInput(e.target.value);
					}}
				/>
				<br />
				<label>Author:</label>
				<input
					type="text"
					value={authorInput}
					name="author"
					onChange={(e) => {
						setAuthorInput(e.target.value);
					}}
				/>
				<br />
				<label>Categories:</label>
				<input
					type="text"
					value={categoriesInput}
					name="categories"
					onChange={(e) => {
						setCategoriesInput(e.target.value);
					}}
				/>
				<br />
				<Link className="link-button" to="/blogs">
				<button className="login-form-button" onClick={handleOnSubmit}>Submit</button>
				</Link>
			</form>	
		</div>
	);
}