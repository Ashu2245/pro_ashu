import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.go = this.go.bind(this);
        this.routes = this.routes.bind(this);

    }
    routes() {
        this.props.navigator.push({name: 'signup'})
    }
    go() {
        this.props.navigator.push({name: 'home'})
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this.routes} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{
                        alignSelf: 'flex-end'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            margin: 10
                        }}>SIGN UP</Text>
                    </View>
                </TouchableNativeFeedback>
                <View >
                    <Image source={require('../img/mainlogo.png')}/>
                </View>
                <TouchableNativeFeedback onPress={this.go} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View >
                        <Icon name="ios-arrow-round-forward" size={90}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        justifyContent: 'space-between'
    }
});
