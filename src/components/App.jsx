import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { ToastContainer, toast } from 'react-toastify';


export const App = () => {

	const [contacts, setNewContacts] = useState(JSON.parse(localStorage.getItem('contacts')))
	const [filter, setFilter] = useState('')

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

	const checkExistingContact = (newContact) => {
		return contacts.some(contact => contact.name === newContact.name)
	}

	const onSubmit = (newContact) => {
		if (!checkExistingContact(newContact)) {
			setNewContacts(prev => ([...prev, newContact]))
			return toast.info("You added a new contact");
		}
		toast.error('U already have this contact')
	}

	const handleDelete = (id) => {
		setNewContacts(prev => prev.filter(contacts => contacts.id !== id))
	}

	const onFilter = ({ target: { value } }) => {
		setFilter(value)
	}

	const contactsFilteredByName = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

	return (
		<>
			<ContactForm onSubmit={onSubmit}></ContactForm>
			{contacts.length !== 0 && <Filter filter={filter} onFilter={onFilter} />}
			<ContactList contacts={contactsFilteredByName} handleDelete={handleDelete} />
			<ToastContainer />
		</>
	);
};
