import React, {useEffect, useState} from 'react';
import {StartButton} from '../../components/StartButton';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setRestart} from '../../redux/reducers/counter';
import {Board} from './Board';
import {HomeContainer} from './components';

const Home = () => {
  const [isStart, setIsStart] = useState(true);
  const restart = useAppSelector(state => state.counter.restart);
  const dispatch = useAppDispatch();
  const onStartPress = () => setIsStart(false);

  useEffect(() => {
    if (restart) {
      dispatch(setRestart(false));
      setIsStart(true);
    }
  }, [restart]);

  return (
    <HomeContainer>
      {isStart && <StartButton callback={onStartPress} />}
      {!isStart && <Board />}
    </HomeContainer>
  );
};

export default Home;
