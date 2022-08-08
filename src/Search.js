import { useState } from "react";
import { search } from "./BooksAPI";
import { updateShelf } from "./utils";
import { Link } from "react-router-dom";

export const Search = () => {
	const [searchedBooks, setSearchedBooks] = useState([]);

	const handleSearch = async (ev) => {
		if (ev.target.value === "") {
			setSearchedBooks([]);
			return;
		}

		const res = await search(ev.target.value, 5);

		if (res.hasOwnProperty("error")) {
			setSearchedBooks([]);
			return;
		}

		setSearchedBooks(res);
	};

	const handleSubmit = async (ev, book) => {
		ev.preventDefault();

		updateShelf(ev.target.value, book);
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						onChange={handleSearch}
						placeholder="Search by title, author, or ISBN"
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{searchedBooks.map((book) => {
						return (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div
											className="book-cover"
											style={{
												width: 128,
												height: 193,
												backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
											}}
										></div>
										<div className="book-shelf-changer">
											<select
												onChange={(ev) => handleSubmit(ev, book)}
												defaultValue={book.shelf}
											>
												<option value={"none"} disabled>
													Move to...
												</option>
												<option value={"currentlyReading"}>
													Currently Reading
												</option>
												<option value={"wantToRead"}>Want to Read</option>
												<option value={"read"}>Read</option>
												<option value={"none"}>None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">
										{book.hasOwnProperty("authors") ? book.authors[0] : ""}
									</div>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};
