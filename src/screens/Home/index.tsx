import React, {useState} from 'react';
import {StartButton} from '../../components/StartButton';
import {Board} from './Board';
import {HomeContainer} from './components';

const Home = () => {
  const [isStart, setIsStart] = useState(true);
  const onStartPress = () => setIsStart(false);

  return (
    <HomeContainer>
      {isStart && <StartButton callback={onStartPress} />}
      {!isStart && <Board />}
    </HomeContainer>
  );
};

export default Home;
