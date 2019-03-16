import React from 'react';
import Book from './Book';


class Library extends React.Component {
	render() {
		const {books} = this.props;

		return(
				<div id="library">
					{books.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Pages</th>
								<th>Read?</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{books.map((book) => (
							<Book key={book.id} book={book} deleteBook={this.props.deleteBook} toggle={this.props.toggle}/>
						))}
						</tbody>
					</table>) : (
					<div className="no-books">
						<p>You haven't added any books yet!</p>
					</div>
					)}
				</div>
			)
	}
}

export default Library;