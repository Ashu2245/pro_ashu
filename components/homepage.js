import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.tour = this.tour.bind(this);
        this.go = this.go.bind(this);
    }
    tour() {
        this.props.navigator.push({name: 'tour'});
    }
    go() {
        this.props.navigator.push({name: 'propage', "a": "asasasasasas"});
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Image style={styles.backimg} resizeMode='cover' source={require('../img/depression1.png')}>
                <View>
                    <Image source={require('../img/mainlogo.png')}/>
                </View>
                <View>
                    <TouchableNativeFeedback onPress={this.go} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.green_button}>
                            <View style={styles.align_text, {
                                width: width * .5
                            }}>
                                <Text style={styles.green_button_text}>LOG IN</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.tour} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.transparent_button}>
                            <View style={styles.align_text, {
                                width: width * .5
                            }}>
                                <Text style={styles.green_button_text}>TAKE A TOUR</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    backimg: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    green_button: {
        backgroundColor: '#22c064',
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#22c064',
        padding: 10,
        margin: 20
    },
    green_button_text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    transparent_button: {
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
        padding: 10,
        margin: 20
    }
});
