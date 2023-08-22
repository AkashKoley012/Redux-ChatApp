import styled from 'styled-components';
import { Person } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/slices/UserSlice';
import { updateChat } from '../store/slices/ChatSlice';
import { updateContact } from '../store/slices/ContatSlice';

const Persons = () => {
  const dispatch = useDispatch();

  let data = useSelector((state) => state.users);
  let persons = data.users;
  if (data.search)
    persons = persons.filter((person) => person.name.includes(data.search));

  const handelClick = (person, chats) => {
    dispatch(updateContact(chats));
    console.log(person.chats);
    dispatch(updateUser(chats));
    dispatch(updateChat(person));
  };

  return (
    <PersonsList>
      {persons.map((person, id) => (
        <Person key={id} person={person} handelClick={handelClick} />
      ))}
    </PersonsList>
  );
};

const PersonsList = styled.div`
  margin: 0rem;
  height: 88vh;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
`;

export default Persons;
