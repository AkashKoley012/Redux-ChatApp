import styled from 'styled-components';
import upload from '../assets/upload.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../store/slices/ChatSlice';
import Chance from 'chance';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chats);
  const chance = Chance();
  const handelClick = () => {
    dispatch(addChat({ id: 1, message: message }));
    dispatch(addChat({ id: data.id, message: chance.sentence() }));
    setMessage('');
  };
  return (
    <Container>
      <Image src={upload} alt="Not Found" />
      <Input
        value={message}
        placeholder="Type your message here"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handelClick}>Send</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  margin: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 3.5rem;
  font-size: 1rem;
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
  cursor: pointer;
  left: 1rem;
  fill: #9e9ea7;
  width: 1.5rem;
  height: 1.5rem;
`;

const Button = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  position: absolute;
  right: 1rem;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

export default ChatInput;
