import React from 'react';
import PropTypes from 'prop-types';
import './FilterSelect.scss';

const FilterSelect = (props) => {
  return (
    <div className="filterBox">
      <select
        className="filterBox__filter"
        value={props.value || 'all'}
        onChange={e => props.handleSelect(e.target.value)}>
          {props.options.map(item =>
            <option
              value={ item.value}
              key={item.value}>
                {item.innerText}
              </option>
          )}
      </select>
    </div>
  );
};

FilterSelect.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.array,
  value: PropTypes.string
};

export default FilterSelect;
