import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ChatDisplay, ChatInput } from '../components';

const Chat = () => {
  const data = useSelector((state) => state.chats);
  return (
    <Container>
      <Header>
        <Image src={data.picture} />
        <Name>{data.name}</Name>
      </Header>
      <Line />
      <ChatDisplay />
      {/* <Line /> */}
      <ChatInput />
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
`;

const Header = styled.div`
  height: 7vh;
  width: 50%;
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;
const Name = styled.h2`
  font-family: cursive;
`;

const Line = styled.hr``;

export default Chat;
