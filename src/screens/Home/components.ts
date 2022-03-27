import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex-grow: 1;
  background-color: ${({theme}) => theme.colors.rose};
  justify-content: center;
  align-items: center;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 160px;
  heigth: 80px;
  background-color: ${({theme}) => theme.colors.lightBlue};
  padding: ${({theme}) => theme.spacing.l}px;
  margin-vertical: ${({theme}) => theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

export const MenuButtonText = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.font.size.H3}px;
`;
