import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setRestart} from '../../redux/reducers/counter';
import {RatingProps} from '../../types/navigation';
import {
  RatingContainer,
  RatingNameText,
  RatingRow,
  RatingNameContainer,
  RatingValueText,
  RestartButton,
  RestartButtonText,
  RestartButtonContainer,
} from './components';

const Rating = ({navigation}: RatingProps) => {
  const ratingList = useAppSelector(state => state.rating.list);
  const dispatch = useAppDispatch();
  const onRestartPress = () => {
    dispatch(setRestart(true));
    navigation.goBack();
  };

  return (
    <RatingContainer>
      {ratingList.map((item, index) => (
        <RatingRow key={`${index}-rating`}>
          <RatingNameContainer>
            <RatingNameText>{`${index + 1}. ${item.name}`}</RatingNameText>
          </RatingNameContainer>
          <RatingValueText>{item.value}</RatingValueText>
        </RatingRow>
      ))}
      <RestartButtonContainer>
        <RestartButton onPress={onRestartPress}>
          <RestartButtonText>Restart</RestartButtonText>
        </RestartButton>
      </RestartButtonContainer>
    </RatingContainer>
  );
};

export default Rating;
