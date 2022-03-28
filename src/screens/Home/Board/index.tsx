import {useNavigation} from '@react-navigation/native';
import React, {useEffect, createRef, useState} from 'react';
import {IPlayButton, PlayButton} from '../../../components/PlayButton';
import {UsernameModal} from '../../../modals/UsernameModal';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  clear,
  increment,
  setDisabledButtons,
} from '../../../redux/reducers/counter';
import {addResult} from '../../../redux/reducers/rating';
import {Counter} from './components';
import {compareSequences, getSequenceValue} from './function';

const buttonsRefs = [
  createRef<IPlayButton>(),
  createRef<IPlayButton>(),
  createRef<IPlayButton>(),
  createRef<IPlayButton>(),
];

export const Board = () => {
  const [playerSequences, setPlayerSequences] = useState<number[]>([]);
  const [sequences, setSequences] = useState<number[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const autoPlay = () => {
    dispatch(setDisabledButtons(true));

    const sequenceValue = getSequenceValue();
    const tmpSequences = [...sequences, sequenceValue];
    let index = 0;

    const interval = setInterval(() => {
      if (index === tmpSequences.length) {
        dispatch(setDisabledButtons(false));
        setSequences(tmpSequences);
        clearInterval(interval);
      }
      buttonsRefs[tmpSequences[index++]]?.current?.onButtonPress();
    }, 1000);
  };

  const playerPress = (i: number) =>
    setPlayerSequences([...playerSequences, i]);

  const onContinuePress = (name: string) => {
    setModalVisible(false);
    dispatch(
      addResult({
        name,
        value: counter,
      }),
    );
    dispatch(clear());
    navigation.navigate('Rating', {withNewName: true});
  };

  useEffect(() => {
    autoPlay();
  }, [counter]);

  useEffect(() => {
    if (playerSequences.length === 0) return;

    const isEqual = compareSequences(sequences, playerSequences);

    if (!isEqual) {
      setPlayerSequences([]);
      setSequences([]);
      setModalVisible(true);
    } else {
      if (sequences.length !== playerSequences.length) return;

      setPlayerSequences([]);
      dispatch(increment());
      setSequences(sequences.map(() => getSequenceValue()));
    }
  }, [playerSequences]);

  return (
    <>
      <Counter>{counter}</Counter>
      <PlayButton ref={buttonsRefs[0]} press={playerPress} index={0} />
      <PlayButton ref={buttonsRefs[1]} press={playerPress} index={1} />
      <PlayButton ref={buttonsRefs[2]} press={playerPress} index={2} />
      <PlayButton ref={buttonsRefs[3]} press={playerPress} index={3} />
      {modalVisible && <UsernameModal onContinue={onContinuePress} />}
    </>
  );
};
