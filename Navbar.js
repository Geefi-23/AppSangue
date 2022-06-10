import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import SupportUs from './screens/SupportUs';
import Tutorials from './screens/Tutorials';
import Settings from './screens/Settings';

const Navbar = () => {
  const Tab = createMaterialBottomTabNavigator();
  const tabs = {
    Home: {
      iconName: 'home'
    },
    SupportUs: {
      iconName: 'cash'
    },
    Tutorials: {
      iconName: 'water'
    },
    Settings: {
      iconName: 'settings'
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({focused, color}) => {
              let iconName = `${tabs[route.name].iconName}${!focused ? '-outline' : ''}`;

              return <Icon name={iconName} color={color} size={16} />
            }, 
            
            headerShown: false
          };
        }}
        barStyle={{ margin: 16, marginTop: 0, backgroundColor: '#fff', elevation: 0, borderColor: '#dee2e6', borderWidth: 1, borderRadius: 12, overflow: 'hidden'}}
        activeColor='red'
        inactiveColor='gray'
        sceneContainerStyle={{ padding: 20}}
      >
        <Tab.Screen name="Home" options={{ title: 'Inicio' }} component={Home}/>
        <Tab.Screen name="SupportUs" options={{ title: 'Apoia-se' }} component={SupportUs}/>
        <Tab.Screen name="Tutorials" options={{ title: 'Tutoriais' }} component={Tutorials}/>
        <Tab.Screen name="Settings" options={{ title: 'Configurações' }} component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;