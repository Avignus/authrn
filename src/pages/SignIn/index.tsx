import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 18,
    color: 'white',
  },
});

const ButtonStyled = styled.TouchableOpacity`
  background-color: rgba(77, 5, 232, 0.7);
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
`;

const SignIn: React.FC = () => {
  const {signed, user, signIn} = useAuth();

  console.log(signed);
  console.log(user);
  function handleSignIn() {
    signIn();
  }
  return (
    <View style={styles.container}>
      <ButtonStyled onPress={handleSignIn}>
        <Text style={styles.textStyles}>Sign in</Text>
      </ButtonStyled>
    </View>
  );
};

export default SignIn;
