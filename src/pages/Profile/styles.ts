import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0 24px;
  font-family: 'RobotoSlab-Medium';
  text-align: left;
  align-self: flex-start;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin-top: 64px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;
