import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Circle = (props) => {
    const position = {bottom:props.y,left:props.x};
	return (
		<TouchableOpacity style={[styles.circle,position]}
		onPress={props.action}>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  circle: {
	position:"absolute",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#222",
  }
});

export default Circle;