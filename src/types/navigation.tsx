import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Rating: {withNewName?: boolean};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export type RatingProps = StackScreenProps<RootStackParamList, 'Rating'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
