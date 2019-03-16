import React from 'react';

class Book extends React.Component {
	render() {
		const {book} = this.props;

		return (
			<tr className="card">
					<td className="book-title">{book.title}</td>
					<td className="book-author">{book.author}</td>
					<td className="book-pages">{book.pages}</td>
						{book.read ?
						<td><button className="toggle-read read" onClick={this.props.toggle.bind(this, book.id)}>Read</button></td> : 
						<td><button className="toggle-read not-read" onClick={this.props.toggle.bind(this, book.id)}>Not read</button></td>}
						<td><button className="delete-btn" onClick={this.props.deleteBook.bind(this, book.id)}>×</button></td>
			</tr>
		)
	}
}

export default Book;