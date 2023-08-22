import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateChat } from '../store/slices/ChatSlice';
// import { updateUser } from '../store/slices/UserSlice';

const Person = (props) => {
  let data = useSelector((state) => state.chats);
  let lastMessage = props.person.chats.slice(-1)[0]?.message;
  let lastTime = props.person.chats.slice(-1)[0]?.time;
  lastTime = new Date(lastTime ? lastTime : Date.now());
  lastTime = `${
    lastTime.getHours() >= 12 ? lastTime.getHours() - 12 : lastTime.getHours()
  }:${lastTime.getMinutes()} ${lastTime.getHours() >= 12 ? 'PM' : 'AM'}`;

  return (
    <PersonStyle onClick={() => props.handelClick(props.person, data)}>
      <Image src={props.person.picture} alt="Not Found" />
      <PersonDetails>
        <Name>{props.person.name}</Name>
        <Content>
          {lastMessage ? lastMessage : 'Lorem Ipsum is simply dummy text'}
        </Content>
      </PersonDetails>
      <Time>{lastTime}</Time>
    </PersonStyle>
  );
};

const PersonStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const PersonDetails = styled.div`
  margin-left: 1.5rem;
`;

const Name = styled.h2`
  font-family: monospace;
  margin-bottom: 0.2rem;
`;
const Content = styled.p`
  color: gray;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 10rem;
`;

const Time = styled.div`
  color: gray;
  margin-left: 2rem;
`;

Person.propTypes = {
  person: PropTypes.any.isRequired,
  handelClick: PropTypes.func.isRequired,
};

export default Person;
