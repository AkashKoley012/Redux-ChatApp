import styled from 'styled-components';
import add from '../assets/add.svg';
import { Link } from 'react-router-dom';

const AddPerson = () => {
  return (
    <Container>
      CONVERSATION
      <Link to="/contacts">
        <Button src={add} alt="Not Found" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 1rem 1rem;
  justify-content: space-between;
`;

const Button = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

export default AddPerson;
