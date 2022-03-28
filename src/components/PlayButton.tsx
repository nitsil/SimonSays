import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {playSound} from '../resources/sounds/sound';

interface PlayButtonProps {
  index: number;
  press: (index: number) => void;
}
export type IPlayButton = {onButtonPress: () => void};

const PlayButtonColors = ['yellow', 'blue', 'green', 'orange'];

export const PlayButton = React.forwardRef<IPlayButton, PlayButtonProps>(
  ({index, press}: PlayButtonProps, ref) => {
    const [opacity, setOpacity] = useState(1);
    const disabled = useAppSelector(state => state.counter.disabledButtons);
    const backgroundColor = PlayButtonColors[index];
    let timeoutRef = useRef<NodeJS.Timer>();

    useEffect(() => timeoutRef.current && clearTimeout(timeoutRef.current), []);

    const onButtonPress = useCallback(() => {
      playSound(index);
      setOpacity(0.3);
      timeoutRef.current = setTimeout(() => {
        setOpacity(1);
      }, 500);
    }, []);

    useImperativeHandle(ref, () => ({
      onButtonPress,
    }));

    const onPress = () => {
      onButtonPress();
      press && press(index);
    };

    return (
      <View style={{opacity}}>
        <TouchableOpacity
          onPress={onPress}
          {...{disabled}}
          style={{
            width: 160,
            height: 80,
            padding: 12,
            marginVertical: 10,
            backgroundColor: backgroundColor,
          }}
        />
      </View>
    );
  },
);
