import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Chance from 'chance';
const ChatDisplay = () => {
  const data = useSelector((state) => state.chats);
  const chance = Chance();
  return (
    <Container>
      {data.chats?.map((message, id) => (
        <Chat key={id} id={message.id}>
          {message.message}
          <Notch id={message.id} />
          <Details>
            <Image src={message.id === 1 ? chance.avatar() : data.picture} />
            <Name>{message.id === 1 ? 'You' : data.name.split(' ')[0]}</Name>
            <Time>
              {new Date(message.time).getHours() +
                ':' +
                new Date(message.time).getMinutes()}
            </Time>
          </Details>
        </Chat>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 83vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
`;
const Chat = styled.p`
  background-color: ${(props) =>
    props.id == 1 ? 'rgb(34 197 94 / 1)' : 'deeppink'};
  max-width: 12rem;
  margin-top: 0.2rem;
  border-radius: ${(props) =>
    props.id == 1 ? '20px 0px 20px 20px' : '0px 20px 20px 20px'};
  color: white;
  font-size: 1rem;
  padding: 1rem;
  position: relative;
  font-family: math;
  left: ${(props) => (props.id == 1 ? '86%' : '2%')};
`;
const Notch = styled.span`
  border: 1px solid;
  ${(props) =>
    props.id == 1
      ? 'border-left: 20px solid rgb(34 197 94 / 1);'
      : 'border-right: 20px solid deeppink;'}
  border-bottom: 20px solid transparent;
  ${(props) =>
    props.id == 1
      ? 'border-top-right-radius: 0.5rem;'
      : 'border-top-left-radius: 0.5rem;'}
  ${(props) =>
    props.id == 1
      ? 'border-bottom-right-radius: 0.5rem;'
      : 'border-bottom-left-radius: 0.5rem;'}
  position: absolute;
  top: 0;
  ${(props) => (props.id == 1 ? 'right: -1rem;' : 'left: -1rem;')}
`;

const Details = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: -2rem;
  color: black;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: bold;
  margin-left: 0.5rem;
`;
const Time = styled.div`
  color: gray;
  margin-left: 0.5rem;
`;

export default ChatDisplay;
