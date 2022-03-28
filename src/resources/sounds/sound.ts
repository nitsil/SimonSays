import Sound from 'react-native-sound';
Sound.setCategory('SoloAmbient');
const sounds = ['s1.mp3', 's2.mp3', 's3.mp3', 's4.mp3'];

export const playSound = (index: number) => {
  var whoosh = new Sound(sounds[index], Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );
    whoosh.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};
