import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ onSubmit }) => {
	const INITIAL_CONTACT = {
		name: '',
		number: ''
	}
	const [contact, setContact] = useState(INITIAL_CONTACT)

	const handleChange = ({ target: { name, value } }) => {
		setContact(prevState => ({ ...prevState, [name]: value, id: nanoid(2) }));
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newContact = {
			id: contact.id,
			name: contact.name,
			number: contact.number
		}
		onSubmit(newContact)
		setContact({ name: '', number: '' })
	}
	return (
		<>
			<form className='container-sm m-2' onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input
						type="text"
						name="name"
						id='name'
						className='form-control'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						value={contact.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="number" className="form-label">Number</label>
					<input
						className='form-control'
						type="tel"
						name="number"
						id='number'
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						value={contact.number}
						onChange={handleChange}
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">Add Contact</button>
			</form >
		</>
	)
}

ContactForm.propTypes = {
	onSubmit: PropTypes.func
}

export default ContactForm