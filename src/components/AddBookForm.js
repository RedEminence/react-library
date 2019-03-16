import React from 'react';

class AddBookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			pages: '',
			read: '',
			modalOpened: false
		}
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	handleFormChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleFormSubmit(event) {
		const { title, author, pages, read } = this.state;

		this.props.addBook(event, title, author, pages, read);

		this.setState({
			title: '',
			author: '',
			pages: '',
			read: '',
		});
		event.target.reset();
		this.openModal();
	}
	

	openModal() {
		this.setState(prevState => ({modalOpened: !prevState.modalOpened}))
	}

	render() {
		return(
			<div className="modal-wrapper">
				<button id="open-modal-btn" onClick={this.openModal}>Add Book</button>
				<div className="modal" style={{display: this.state.modalOpened ? 'flex' : 'none' }}>
					<form className="add-book-form" onSubmit={this.handleFormSubmit}>
						<div className="modal-header">
						<span className="close" onClick={this.openModal}>×</span>
						</div>
						<div className="modal-body">
							<input type="text" name="title" placeholder="Title" required value={this.state.value} onChange={this.handleFormChange}/>
							<input type="text" name="author" placeholder="Author" required value={this.state.value} onChange={this.handleFormChange}/>
							<input type="number" min="1" name="pages" placeholder="Number of pages" required value={this.state.value} onChange={this.handleFormChange}/>
							<div className="already-read">
								<input type="checkbox" name="already-read" checked={this.state.value} onChange={this.handleFormChange}/>
								<label htmlFor="already-read">Already read?</label>
							</div>
						</div>
						<div className="modal-footer">
							<button type="submit"value="Submit">Add book</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default AddBookForm;