import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    Dimensions,
    TouchableOpacity,
    Slider
} from 'react-native';

import Carousel from 'react-native-carousel'

import Icon from 'react-native-vector-icons/Ionicons';
var {width, height} = Dimensions.get('window');

import {TourSlide} from './tourslide'

import {map} from 'lodash'

export class TourPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tour: [
                {
                    heading: 'Slide1',
                    text: 'Thus much I thought proper to tell you in reaction to yourself,and to he trust i resposed in you'
                }, {
                    heading: 'Slide2',
                    text: 'Thus much I thought proper to tell you in reaction to yourself,and to he trust i resposed in you'
                }, {
                    heading: 'Slide3',
                    text: 'Thus much I thought proper to tell you in reaction to yourself,and to he trust i resposed in you'
                }
            ]
        }
        this._generateSlides = this._generateSlides.bind(this);
        this.backtour = this.backtour.bind(this);
    }
    backtour() {
        console.log("dsadsadas");
        this.props.navigator.push({name: 'start'});
    }
    _generateSlides() {
        let slides = [];
        slides = map(this.state.tour, (slide, index) => {
            return (<TourSlide heading={slide.heading} key={index} text={slide.text}/>)
        })
        return slides;
    }
    render() {
        var {height, width} = Dimensions.get('window');
        let slides = this._generateSlides();

        return (
            <Image style={{
                flex: 1,
                width: null,
                height: null
            }} source={require('../img/depression1.png')}>

                <View style={styles.container}>
                    <View style={{
                        marginTop: height * .1 * .5,
                        marginBottom: height * .1 * .5,
                        marginLeft: width * .1 * .5,
                        marginRight: width * .1 * .5,
                        width: width * .9,
                        height: height * .9,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <TouchableNativeFeedback onPress={this.backtour} background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{
                                alignSelf: 'flex-end'
                            }}>
                                <Icon name="md-close" style={{
                                    marginRight: 10
                                }} size={30}/>
                            </View>
                        </TouchableNativeFeedback>
                        <Carousel indicatorColor="#22c064" indicatorOffset={0} hideIndicators={false} indicatorAtBottom={true} loop={false} animate={false} width={width * .9}>
                            {slides}
                        </Carousel>
                    </View>
                </View>
            </Image>
        )
    }
}

TourPage.propTypes = {
    navigator: React.PropTypes.any.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        color: '#333',
        textAlign: 'center',
        margin: 40
    },
    image: {
        width: 100,
        height: 100
    },
    text: {
        fontSize: 15,
        color: '#333',
        textAlign: 'center',
        padding: 20,
        marginLeft: 40,
        marginRight: 40
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
});
