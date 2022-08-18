import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Fragment } from 'react';
// import styled from 'styled-components';


function Section({ title, children }) {
  
    return (
      <div>
      <Title>{title}</Title>
        {children}      
       </div>
    )
 
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`