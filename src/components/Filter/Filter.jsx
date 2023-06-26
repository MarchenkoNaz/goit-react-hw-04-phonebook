import React from 'react';

import PropTypes from 'prop-types';


const Filter = ({ filter, onFilter }) => {
	return (<>
		<div className="mb-3 container-sm mt-3 m-2">
			<label htmlFor="exampleInputEmail1" className="form-label">Search contact</label>
			<input className="form-control" type="text" value={filter} onChange={onFilter} />
		</div>	</>
	);
}

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	onFilter: PropTypes.func.isRequired,
};

export default Filter;