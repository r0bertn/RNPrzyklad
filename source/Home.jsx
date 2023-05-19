import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const MenuButton = (props) => {
	return (
	  <TouchableOpacity style={styles.button} onPress={props.action}>
		<Text style={styles.buttonText}>{props.text}</Text>
	  </TouchableOpacity>
	);
}

const MenuTitle = (props) => {
	return (
		<View style={styles.menuTitleView}>
			<Text style={styles.menuTitleText}>
				{props.text}
			</Text>
		</View>
	);
}

const Home = (props) => {
	return (
	<SafeAreaView style={{backgroundColor:"#EEE"}}>
		<View style={styles.container}>
		  
		  <MenuTitle text="GIGA APPKA V0.0001ALPHA" />
		  <MenuButton text="Główny feature" action={() => props.navigation.navigate('Pepe')}/>
		  <MenuButton text="Coś tam innego" action={() => props.navigation.navigate('Nodes')}/>

		</View>  
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {	
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
	width:"100%",
	height:"100%",
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
	marginTop: 60,
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

export default Home;