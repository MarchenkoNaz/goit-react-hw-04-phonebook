import PropTypes from 'prop-types'

const ContactList = ({ contacts, filter, handleDelete }) => {


	return (<div className='m-2'>
		<h1 className="display-3 ">Contact List</h1>
		{contacts.length !== 0 ? <ul className="list-group  container-sm m-2">
			{contacts.map(contact =>
				<li key={contact.id} className="list-group-item d-flex justify-content-between">
					<div>
						<p className='mb-1'>Name: {contact.name}</p>
						<p className='m-0'>Number: {contact.number}</p>
					</div>
					<button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
				</li>
			)}
		</ul> : <p className='lead'>Contact list is empty</p>}
	</div>)

}

// ContactList.propTypes = {
// 	contacts: PropTypes.array.isRequired,
// 	deleteContact: PropTypes.func.isRequired,
// }

export default ContactList