import "./App.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookShelf } from "./components/Shelf";
import { BOOK_CONTEXT } from "./bookContext";

export const Home = () => {
	const {books, updateShelf} = useContext(BOOK_CONTEXT)

	return (
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf books={books} updateShelf={updateShelf} />
						</div>
						<div className="open-search">
							<Link to="/search">Add a book</Link>
						</div>
					</div>
				</div>
			</div>
	);
};
