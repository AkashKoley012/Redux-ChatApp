import styled from 'styled-components';
import search from '../assets/search.svg';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchContact } from '../store/slices/ContatSlice';
import { searchUser } from '../store/slices/UserSlice';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleChange = (e) => {
    if (location.pathname === '/') dispatch(searchUser(e.target.value));
    else dispatch(searchContact(e.target.value));
  };
  return (
    <Container>
      <Image src={search} alt="Not Found" />
      <Input placeholder="Search for conversation" onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 22rem;
  margin: 1rem auto;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  &::placeholder {
    color: #9e9ea7;
  }
  &:focus,
  &:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
`;

const Image = styled.img`
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
`;

export default SearchContainer;
