import { React } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const ContactList = ({contacts, onDelete}) => (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>{name}: {number}
                <ListBtn type="button" onClick={() => onDelete(id)}>Delete</ListBtn>
                </ListItem>))}
        
    </ul>
)
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })).isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default ContactList;

const ListItem = styled.li`
width: 85%;
    font-size: 25px;
    justify-content: space-between;
    margin-bottom: 10px;
    display: flex;
    border-radius: 5px;

`;
const ListBtn = styled.button`
    margin-right: 0;
    width: 15%;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    background-color: #fcb8b8;
     &:hover{
     background-color: #f93636;
     transform: scale(1.1);
 }
`;