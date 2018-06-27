import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-home', 30),
    Icon.getImageSource('md-briefcase', 30),
    Icon.getImageSource('md-heart', 30),
    Icon.getImageSource('md-call', 30),
    Icon.getImageSource('md-settings', 30),
  ]).then((sources) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'HomeScreen',
          label: 'Home',
          title: 'NORMAL STATUS',
          icon: sources[0],
        },
        {
          screen: 'VitalInfoScreen',
          label: 'Vital Info',
          title: 'NORMAL STATUS',
          icon: sources[1],
        },
        {
          screen: 'MedicalCondScreen',
          label: 'Medical Cond',
          title: 'NORMAL STATUS',
          icon: sources[2],
        },
        {
          screen: 'EmerCallScreen',
          label: 'Emer Call',
          title: 'NORMAL STATUS',
          icon: sources[3],
        },
        {
          screen: 'SettingScreen',
          label: 'Setting',
          title: 'NORMAL STATUS',
          icon: sources[4],
        },
      ],
      // ios
      tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#8A8A8A',
        tabBarBackgroundColor: '#000',
        tabBarSelectedButtonColor: '#fff',
        
        navBarComponentAlignment: 'fill',
        navBarTextColor: '#fff',
        navBarButtonColor: '#fff',
      },
      // Android 
      appStyle: {
        tabBarButtonColor: '#8A8A8A',
        tabBarBackgroundColor: '#000',
        tabBarSelectedButtonColor: '#fff',

        navBarBackgroundColor: '#273673',

        navBarTitleTextCentered: true,
        navBarTextColor: '#fff',
      },
      
    });
  });
};

export default startTabs;