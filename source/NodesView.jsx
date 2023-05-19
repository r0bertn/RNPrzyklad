import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import Circle from "./Circle.jsx";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NodesView = (props) => {
	
	const goHome = () => {
		props.navigation.navigate('Home');
	}

	return (
	<SafeAreaView style={styles.container}>
        <ReactNativeZoomableView
          maxZoom={1}
		  minZoom={0.25}
		  initialZoom={1}
		  initialOffsetY={-((windowHeight/2))}
          contentWidth={windowWidth*3}
          contentHeight={windowHeight*2}
        >
		<View style={styles.mapCanvas}>
		  <Circle x={720} y={50} action={goHome} />
		  <Circle x={720} y={350} action={goHome} />
		  <Circle x={220} y={800} action={goHome} />
		  <Circle x={920} y={700} action={goHome} />
		  <Circle x={620} y={900} action={goHome} />
		  </View>
        </ReactNativeZoomableView>
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {	
    height: "100%",
	width: "100%",
	backgroundColor:"#EEE",
  },
  mapCanvas: {
	  width:1500,
	  height:1500,
	  backgroundColor:"#EEE",
  },
  menuTitleView: {
	top:40,
	fontSize:40,
	width:"100%",
	height:60
  },
  menuTitleText: {
	textAlign:"center",
	fontWeight:500,
	fontSize:24,
  },
  button: {
	marginTop: 100,
	alignSelf: 'center',
    width: "70%",
	backgroundColor:"lightblue",
    height: 50,
	justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
	  color:"#222",
	  fontWeight:500,
	  fontSize:16,
  },
});

export default NodesView;