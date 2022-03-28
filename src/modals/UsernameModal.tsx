import React, {useEffect, useMemo, useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface UsernameModalProps {
  onContinue: (name: string) => void;
}

export const UsernameModal = ({onContinue}: UsernameModalProps) => {
  const [username, setUsername] = useState('');
  const disabled = useMemo(() => username.length === 0, [username]);

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            autoFocus
            style={styles.modalText}
            placeholderTextColor="black"
            placeholder="Provide your name"
            value={username}
            onChangeText={value => setUsername(value)}
          />
          <Pressable
            style={[
              styles.button,
              styles.buttonClose,
              {opacity: disabled ? 0.3 : 1},
            ]}
            disabled={disabled}
            onPress={() => {
              onContinue(username);
            }}>
            <Text style={styles.textStyle}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
});
