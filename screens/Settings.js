import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
  padding: 16px;
  gap: 4px;
`;

const SettingButton = (props) => {
  const { title, backgroundColor, textColor, underlayColor } = props;

  const Button = styled.TouchableHighlight`
    justifyContent: center;
    height: 35px;
    width: 100%;
    borderRadius: 8px;
    paddingHorizontal: 24px
  `;

  return (
    <Button style={{ backgroundColor: backgroundColor }} underlayColor={underlayColor} onPress={() => alert('Vc clicou no botao')}>
      <Text style={{ color: textColor }}>{title}</Text>
    </Button>
  );
};

const Settings = () => {
  return (
    <Container>
      <SettingButton 
        title="My account" 
        backgroundColor='#fff'
        textColor="#000"
        underlayColor="#ebebeb"
      />
      <SettingButton 
        title="My schedule" 
        backgroundColor='#fff'
        textColor="#000"
        underlayColor="#ebebeb"
      />
      <SettingButton 
        title="Private policy" 
        backgroundColor='#fff'
        textColor="#000"
        underlayColor="#ebebeb"
      />
      <SettingButton 
        title="Exit" 
        backgroundColor='#ff4646'
        textColor="#fff"
        underlayColor="#d73535"
      />
    </Container>
    
  );
};

export default Settings;