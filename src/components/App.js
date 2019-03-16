import React from 'react';
import Header from './Header';
import Library from './Library';
import AddBookForm from './AddBookForm';
import sampleBooks from '../sampleBooks';

class App extends React.Component {
	constructor(props) {
  	super(props);

  	this.state = {
  		library: (localStorage.getItem('library') === null) ? sampleBooks : JSON.parse(localStorage.getItem('library'))
  	}

  	this.addBook = this.addBook.bind(this);
  	this.deleteBook = this.deleteBook.bind(this);
  	this.handleToggle = this.handleToggle.bind(this);
  }

  addBook(event, title, author, pages, read) {
		event.preventDefault();

		const library = this.state.library;
		const now = Date.now();
		const newBook = {
			title: title,
			author: author,
			pages: pages,
			read: read,
			id: now
		}

		library.push(newBook);
		this.setState({
			library,
			title: '',
			author: '',
			pages: '',
			read: '',
			id: ''
		});
		localStorage.setItem('library', JSON.stringify(library));
		console.log(library);
	}

	deleteBook(id) {
		const prevLibrary = this.state.library;
		this.setState(prevState => ({
			library: prevLibrary.filter(book => book.id !== id)
		}), function() { localStorage.setItem('library', JSON.stringify(this.state.library)) })
	}

	handleToggle(id) {
		const library = this.state.library;
		const book = library.find(book => book.id === id);
		book.read = !book.read;
		this.setState({
			library
		});
		localStorage.setItem('library', JSON.stringify(library));
	}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
	        <AddBookForm addBook={this.addBook}/>
	        <Library 
	        books={this.state.library}
	        deleteBook={this.deleteBook}
	        toggle={this.handleToggle} />
        </main>
      </div>
    );
  }
}

export default App;