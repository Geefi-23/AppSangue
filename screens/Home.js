/**
 * @author Milton R.
 * @author Yan Lucas
 */

import { Text, View, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';


const AnnouncementCard = (props) => {
  const { title, author, resume, bloodTypes, bloodType, institution } = props;

  const Card = styled.View`
    backgroundColor: #fff;
    width: 100%;
    borderBottomColor: #dee2e6;
    borderBottomWidth: 1px;
    padding: 12px;
  `;

  // for institution
  const Badge = styled.View`
    position: relative;
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
    backgroundColor: #fa3939;
    width: 150px;
    left: -12px;
    padding: 4px;
    borderEndColor: transparent;
    borderEndWidth: .1px;
    borderBottomColor: #cb2525;
    borderBottomWidth: 4px;
    borderBottomEndRadius: 8px;
    borderTopEndRadius: 8px;
  `;

  const Title = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
  `;

  const Resume = styled.Text`
    height: 90px;
    marginTop: 8px;
  `;

  const DonateButton = styled.TouchableHighlight`
    alignItems: center;
    backgroundColor: #ff4646;
    width: 100px;
    borderRadius: 8px;
    padding: 8px;
  `;

  return (
    <Card>
      {
        institution ?
        <Badge>
          <Icon name="water" color="#fff" size={18} />
          <Text style={{ color: '#fff', fontSize: 18 }}>Instituição</Text>
        </Badge>
        :
        <></>
      }
      <Title numberOfLines={1}>{title}</Title>
      <Text style={{ color: 'gray', fontSize: 12 }}>{author} - 00/00 às 00:00</Text>
      <Resume numberOfLines={5}>{resume}</Resume>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginTop: 8 }}>
          Tipo sanguíneo:&nbsp;
          <Text style={{ color: '#ff4646' }}>
            {
              institution ?
              bloodTypes.join(', ')
              :
              bloodType
            }
          </Text>
        </Text>
        <DonateButton underlayColor="#d73535" onPress={() => alert('oi')}>
          <Text style={{ color: '#fff' }}>Quero doar</Text>
        </DonateButton>
      </View>
    </Card>
  );
};

const Home = ({ navigation }) => {

  const Main = styled.ScrollView`
    flex: 1;
    backgroundColor: #fff;
    padding: 16px;
    overflow: hidden;
  `;

  const CardsContainer = styled.View`
    backgroundColor: #fff;
    width: 100%;
    border: 1px solid #dee2e6;
    borderRadius: 12px;
    overflow: hidden;
    elevation: 4;
    paddingBottom: 16px;
  `;

  return (
    <Main>
      <CardsContainer>
        <AnnouncementCard 
          title="Preciso de sangue!" 
          resume="Preciso de uma doação de sangue na hemosul" 
          author="Miltinho" 
          bloodType="A+"
        />
        <AnnouncementCard 
          title="Preciso de sangue, também!" 
          resume="Preciso de uma doação de sangue não sei onde" 
          author="Yan Lucas"
          bloodType="A+"
        />
        <AnnouncementCard 
          title="Preciso de sangue, também!" 
          resume="Preciso de uma doação de sangue não sei onde" 
          author="Yan Lucas"
          bloodType="O-"
        />
        <AnnouncementCard 
          title="Precisamos de sangue!" 
          resume="Precisamos de sangue, está faltando em nossos estoques!" 
          author="Hemosul" 
          institution={true} 
          bloodTypes={['A', 'B', 'C']}
        />
      </CardsContainer>
      
    </Main>
  );
}

export default Home;