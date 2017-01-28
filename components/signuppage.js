import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    TextInput,
    TouchableOpacity,
    ToolbarAndroid,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.tour = this.tour.bind(this);
        this.go = this.go.bind(this);
    }
    tour() {
        this.props.navigator.push({name: 'tour'});
    }
    go() {
        this.props.navigator.pop({name: 'home'});
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-around'
            }}>
                <Icon.ToolbarAndroid navIconName="md-arrow-back" title='' style={styles.toolbar} titleColor='black' overflowIconName="md-more" action={[]}>
                    <View style={{
                        flex: 1,
                        alignSelf: 'center',
                        borderWidth: 0,
                        paddingLeft: width / 4.8,
                        paddingTop: 11
                    }}>
                        <Text style={{
                            fontSize: 22
                        }}>
                            SignUp
                        </Text>
                    </View>
                </Icon.ToolbarAndroid>
                <View style={[styles.container]}>
                    {/* <View style={styles.logo}>
                        <Image source={require('../img/mainlogonew.png')}/>
                    </View> */}
                    <View style={styles.inside}>
                        <View style={styles.logo}>
                            <Image source={require('../img/mainlogonew.png')}/>
                        </View>
                        <View >
                            <TextInput autoCapitalize="words" style={{}} returnKeyType={"next"} placeholder={"Name"} onChangeText={(text) => this.setState({name: text})} onSubmitEditing={() => {
                                this.refs['email'].focus()
                            }} value={this.state.name}></TextInput>
                        </View>
                        <View >
                            <TextInput ref="email" returnKeyType={"next"} keyboardType={"email-address"} placeholder={"Email"} onChangeText={(text) => this.setState({email: text})} onSubmitEditing={() => {
                                this.refs['pass'].focus()
                            }} value={this.state.email}></TextInput>
                        </View>
                        <View >
                            <TextInput ref="pass" returnKeyType={"go"} secureTextEntry={true} placeholder={"Password"} onChangeText={(text) => this.setState({password: text})} value={this.state.password}></TextInput>
                        </View>
                        <TouchableOpacity onPress={this.tour} background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={styles.transparent_button}>
                                <View style={styles.align_text, {
                                    width: width * .75,
                                    height: height * .04
                                }}>
                                    <Text style={styles.green_button_text}>SIGN UP VIA FACEBOOK</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.frontimg}>
                    <TouchableNativeFeedback style={styles.green_background} onPress={this.tour} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.green_background}>
                            <Icon name="md-arrow-round-forward" size={18} color="white"/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        //borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    toolbar: {
        height: 40
    },
    inside: {
        flex: .01,
        // borderWidth: 1,
        justifyContent: 'space-between'

    },
    textwrapper: {},

    logo: {
        // height: 100,
        // width: 100,
        alignItems: 'center'
    },
    frontimg: {
        flex: .5,
        flexDirection: 'row',
        // justifyContent: 'center'
    },
    green_background: {
        backgroundColor: '#07ae4c',
        alignSelf: 'flex-end',
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    green_button_text: {
        fontSize: 15,
        color: '#379aff',
        textAlign: 'center'
    },
    transparent_button: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#379aff',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});
