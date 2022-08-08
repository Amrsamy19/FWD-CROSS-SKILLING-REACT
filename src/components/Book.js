export const Book = ({ book, updateShelf }) => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("${book?.imageLinks?.thumbnail}")`,
					}}
				></div>
				<div className="book-shelf-changer">
					<select
						onChange={(ev) => updateShelf(ev, book)}
						defaultValue={book.shelf}
					>
						<option value={"none"} disabled>
							Move to...
						</option>
						<option value={"none"}>None</option>
						<option value={"currentlyReading"}>Currently Reading</option>
						<option value={"read"}>Read</option>
						<option value={"wantToRead"}>Want to Read</option>
					</select>
				</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">
				{book.hasOwnProperty("authors") ? book.authors.join(", ") : ""}
			</div>
		</div>
	);
};
