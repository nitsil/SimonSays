import React from 'react';
import {useAppSelector} from '../../redux/hooks';
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
  const onRestartPress = () => {
    navigation.goBack();
  };

  return (
    <RatingContainer>
      {ratingList.map((item, index) => (
        <RatingRow>
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
