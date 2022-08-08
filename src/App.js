import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import { BOOK_CONTEXT } from "./bookContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Search } from "./Search";

export const App = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getAll();
				setBooks(data);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	//changeBookShelf
	const updateShelf = (ev, book) => {
		book.shelf = ev.target.value;
		update(book, ev.target.value).then(() => {
			setBooks([...books.filter((b) => b.id !== book.id), book]);
		});
	};

	return (
		<BOOK_CONTEXT.Provider value={{ books, updateShelf }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</BOOK_CONTEXT.Provider>
	);
};
