import { useState, useContext } from "react";
import { search } from "./BooksAPI";
import { Link } from "react-router-dom";
import { Book } from "./components/Book";
import { BOOK_CONTEXT } from "./bookContext";

export const Search = () => {
	const [searchedBooks, setSearchedBooks] = useState([]);
	const {books, updateShelf} = useContext(BOOK_CONTEXT)

	const handleSearch = async (ev) => {
		if (ev.target.value === "") {
			setSearchedBooks([]);
			return;
		}

		setTimeout(async () => {
			const res = await search(ev.target.value, 5);

			if (res.hasOwnProperty("error")) {
				setSearchedBooks([]);
				return;
			}

			const filteredBooksThumbnail = res.filter((book) =>
				book.hasOwnProperty("imageLinks")
			);
			const filteredBooksAuthors = filteredBooksThumbnail.filter((book) =>
				book.hasOwnProperty("authors")
			);

			setSearchedBooks(filteredBooksAuthors);
		}, 500);
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
						const found = books.find(userBook => book.id === userBook.id)

						return (
							<li key={book.id}>
								<Book book={found || book} updateShelf={updateShelf} />
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};
