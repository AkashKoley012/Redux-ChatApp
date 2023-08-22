import styled from 'styled-components';
import { AddPerson, Contatcs, Persons, SearchContainer } from '../components';
import { Routes, Route } from 'react-router-dom';

const ConversationList = () => {
  return (
    <Container>
      <SearchContainer />
      <AddPerson />
      <Routes>
        <Route path="/" element={<Persons />} />
        <Route path="/contacts" element={<Contatcs />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

export default ConversationList;
