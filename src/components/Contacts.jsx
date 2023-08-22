import styled from 'styled-components';
import { Person } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../store/slices/UserSlice';
import { updateChat } from '../store/slices/ChatSlice';
import { useNavigate } from 'react-router-dom';

const Contatcs = () => {
  const dispatch = useDispatch();

  let data = useSelector((state) => state.contacts);
  let persons = data.contacts;
  if (data.search)
    persons = persons.filter((person) => person.name.includes(data.search));

  const navigate = useNavigate();
  const handelClick = (person, chats) => {
    console.log(person.chats);
    dispatch(addUser(person));
    dispatch(updateChat(person));
    dispatch(updateUser(chats));
    navigate('/');
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

export default Contatcs;
