import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Sydney': require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.container}>
      <View style={styles.navigation_bar}>
        <Image source={require('./assets/Icons/menu_light.png')} style={styles.icons}></Image>
        <Text style={styles.app_name}>
          ensom
        </Text>
        <Image source={require('./assets/Icons/sun.png')} style={styles.icons}></Image>
      </View>
      <View style={styles.profile}>
        <View style={styles.picture_box}>
          <Image source={require('./assets/Profiles/mtl.jpg')} style={styles.profile_pic}></Image>
          <Text style={styles.profile_name}>MTL</Text>
          <Text style={styles.profile_distance}>2 miles away</Text>
        </View>
        <View style={styles.audio_feature}>
          <Text style={styles.audio_text}>My hottest take</Text>
          <View style={styles.audio_images_container}>
            <Image source={require('./assets/Icons/player_light.png')} style={styles.play_image}></Image>
            <Image source={require('./assets/Icons/audio_waveform_light.png')} style={styles.soundwave_image}></Image>
          </View>
        </View>
      </View>
      <View style={styles.bottom_bar}>
        <View style={styles.bottom_button}>
        <Image source={require('./assets/Icons/discover_light.png')} style={styles.icons}></Image>
        <Text style={styles.button_text}>Discover</Text>
        </View>
        <View style={styles.bottom_button}>
        <Image source={require('./assets/Icons/heart_light.png')} style={styles.icons}></Image>
        <Text style={styles.button_text}>Matches</Text>
        </View>
        <View style={styles.bottom_button}>
        <Image source={require('./assets/Icons/messages_light.png')} style={styles.icons}></Image>
        <Text style={styles.button_text}>DMs</Text>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation_bar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 40,
  },
  app_name: {
    fontFamily: 'Sydney-Bold',
    fontSize: 41,
  },
  icons: {
    width: 41,
    height: 41,
    marginLeft: 20,
    marginRight: 20,
  },
  profile: {
    flex: 2,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    position: 'absolute',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    width: windowWidth,
    top: 100,
  },
  profile_pic: {
    width: windowWidth - 50,
    height: (windowWidth - 50) * 1.1,
    borderRadius: 10,
    maxWidth: 500,
    maxHeight: 500 * 1.1,
  },
  profile_name: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    position: 'absolute',
    fontSize: 41,
    marginTop: 3,
    marginLeft: 13,
  },
  profile_distance: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    position: 'absolute',
    fontSize: 18,
    bottom: 0,
    margin: 10,
  },
  audio_feature: {
    width: windowWidth - 50,
    height: (windowWidth - 50) * 0.48,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    maxWidth: 500,
    maxHeight: 500 * 0.45,
    padding: 10,
  },
  audio_text: {
    fontFamily: 'Sydney',
    fontSize: 30,
    color: Themes.light.text,
    marginLeft: 10,
    marginTop: 10,
  },
  audio_images_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  play_image: {
    width: '20%',
    resizeMode: 'contain',
    marginRight: 10,
    },
  soundwave_image: {
    width: '70%',
    resizeMode: 'contain',
  },
  bottom_bar: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignSelf: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: Themes.light.navigation,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
  },
  bottom_button: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
  },
  button_text: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
  }
});
