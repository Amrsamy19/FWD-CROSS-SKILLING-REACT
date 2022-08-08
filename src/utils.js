import { get, update } from "./BooksAPI";

export const getBook = async (booksID) => {
	let books = [];
	for (let id of booksID) {
		const res = await get(id);
		books.push(res);
	}
	return books;
};

export const updateShelf = async (query, book) => {
	const res = await update(book, query);
	let currentlyReading = [];
	let read = [];
	let wantToRead = [];

	for (let title in res) {
		let books = await getBook(res[title]);

		if (title === "currentlyReading") {
			currentlyReading = books;
		} else if (title === "read") {
			read = books;
		} else {
			wantToRead = books;
		}
	}

	return { currentlyReading, read, wantToRead };
};
