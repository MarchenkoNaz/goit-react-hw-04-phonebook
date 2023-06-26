import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { toast } from "react-toastify";

export const App = () => {
	const INITIAL_CONTACTS_LIST = [
		// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	];


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

		</>
	);
};
