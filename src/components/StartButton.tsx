import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.font.size.H3}px;
`;

const Button = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.l}px;
  justify-content: center;
  align-content: center;
`;

const Container = styled.View`
  justify-content: center;
  align-content: center;
  baclground-color: ${({theme}) => theme.colors.rose};
`;

interface StartButtonProps {
  callback: () => void;
}

export const StartButton = ({callback}: StartButtonProps) => {
  const [text, setText] = useState<string | number>('Start');
  let timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (+text < 1) {
      timer.current && clearInterval(timer.current);
      callback?.();
    }
  }, [text]);

  useEffect(() => timer.current && clearInterval(timer.current), []);

  const onStartPress = useCallback(() => {
    timer.current = setInterval(() => setText(v => +v - 1), 1000);
    setText(3);
  }, []);

  return (
    <Container>
      <Button onPress={onStartPress}>
        <Text>{text}</Text>
      </Button>
    </Container>
  );
};
