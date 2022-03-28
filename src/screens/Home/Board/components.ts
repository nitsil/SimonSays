import styled from 'styled-components/native';

export const Counter = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.font.size.H2}px;
  color: ${({theme}) => theme.colors.black};
  margin: ${({theme}) => theme.spacing.l}px;
`;
