import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Filter
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabel>
);
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
export default Filter;

const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
const FilterInput = styled.input`
  margin-left: 20px;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 2px;
  border: none;
`;