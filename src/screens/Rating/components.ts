import styled from 'styled-components/native';

export const RatingContainer = styled.View`
  flex-grow: 1;
  background-color: ${({theme}) => theme.colors.lightGreen};
  padding: ${({theme}) => theme.spacing.l}px ${({theme}) => theme.spacing.xl}px;
`;

export const RatingRow = styled.View`
  flex-direction: row;
  padding-bottom: ${({theme}) => theme.spacing.m}px;
  align-content: center;
  justify-content: space-between;
`;

export const RatingNameText = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.font.size.H4}px;
`;

export const RatingNameContainer = styled.View`
  width: 250px;
  align-content: center;
  justify-content: center;
`;

export const RatingValueText = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.font.size.H4}px;
`;

export const RestartButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const RestartButton = styled.TouchableOpacity`
  width: 160px;
  heigth: 60px;
  align-self: center;
  border-radius: ${({theme}) => theme.spacing.xl}px;
  background-color: ${({theme}) => theme.colors.lightBlue};
  padding: ${({theme}) => theme.spacing.m}px;
  margin-vertical: ${({theme}) => theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

export const RestartButtonText = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.font.size.H4}px;
`;
