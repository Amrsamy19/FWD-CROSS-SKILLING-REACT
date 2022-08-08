import { Book } from "./Book";

const shelves = [
	{
		id: 1,
		name: "currentlyReading",
		displayName: "Currently Reading",
	},
	{
		id: 2,
		name: "read",
		displayName: "Read",
	},
	{
		id: 3,
		name: "wantToRead",
		displayName: "Want To Read",
	},
];

export const BookShelf = ({ books, updateShelf }) => {
	return (
		<div className="bookshelf">
			{shelves.map((shelf) => (
				<div key={shelf.id}>
					<h2 className="bookshelf-title">{shelf.displayName}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{books
								.filter((book) => book.shelf === shelf.name)
								.map((book) => (
									<li key={book.id}>
										<Book book={book} updateShelf={updateShelf} />
									</li>
								))}
						</ol>
					</div>
				</div>
			))}
		</div>
	);
};
