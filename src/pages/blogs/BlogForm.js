import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhotoUpload from "./PhotoUpload";


function BlogForm(props) {
	const [imageInput, setImageInput] = useState("");
	const [titleInput, setTitleInput] = useState("");
	const [textInput, setTextInput] = useState("");
	const [authorInput, setAuthorInput] = useState("");
	const [categoriesInput, setCategoriesInput] = useState("");
	const url = "http://localhost:5005";

	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		props.setShouldRefreshProps(true);
		const newBlog = {
			image: imageInput,
			title: titleInput,
			text: textInput,
			author: authorInput,
			category: categoriesInput,
		};
		// const newArray = [...props.blogsProps, newBlog];
		e.preventDefault();
		// props.setBlogsProps((prevState) => [
		// 	...prevState,
		// 	{ ...newBlog, id: prevState.length + 1 },
		// ]);
		const response = await axios.post(`${url}/blogs/create-blog`, newBlog);
		props.setShouldRefreshProps(false);

		setImageInput("");
		setTitleInput("");
		setTextInput("");
		setAuthorInput("");
		navigate("/blogs");
		//props.setBlogsProps([...props.blogsProps, newBlog])
		//function getInfo(callback){}
		//getInfo(handleOnSubmit)
	};

	return (
		<div className="login-container">
			<h1>Share your pet adoption success story.</h1>
			<br/>
			<form className="login-form" onSubmit={handleOnSubmit}>
				<label>Image:</label>
				<PhotoUpload
				onChange={(e) => {
					setImageInput(e.target.value);
				}}
				/>
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default BlogForm;