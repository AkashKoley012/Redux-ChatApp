import styled from 'styled-components';
import { Chat, ConversationList } from '../components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialdata } from '../api';
import { initUser } from '../store/slices/UserSlice';
import { initChat } from '../store/slices/ChatSlice';
import { initContact } from '../store/slices/ContatSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initialdata(10).then((data) => {
      dispatch(initUser(data.results));
      dispatch(initChat(data.results[0]));
    });

    initialdata(10).then((data) => {
      dispatch(initContact(data.results));
    });
  }, [dispatch]);

  return (
    <Container>
      <ConversationList />
      <Line />
      <Chat />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const Line = styled.hr`
  min-height: 100vh;
`;

export default App;
