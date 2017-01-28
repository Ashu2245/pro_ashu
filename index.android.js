/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator
} from 'react-native';
import {FrontPage} from './components/FrontPage';
import {HomePage} from './components/homepage';
import {TourPage} from './components/tourpage';
import {SignUp} from './components/signuppage';
import {ProductPage} from './components/productpage';
export class project extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content"/>
                <Navigator initialRoute={{
                    name: 'start'
                }} renderScene={this.renderScene}/>
            </View>
        );
    }
    renderScene(route, navigator) {
        if (route.name === 'start') {
            return (<FrontPage navigator={navigator}/>);
        } else if (route.name === 'home') {
            return (<HomePage navigator={navigator}/>);
        } else if (route.name === 'tour') {
            return (<TourPage navigator={navigator}/>);
        } else if (route.name === 'signup') {
            return (<SignUp navigator={navigator}/>)
        } else if (route.name === 'propage') {
            return (<ProductPage navigator={navigator}/>)
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('project', () => project);
