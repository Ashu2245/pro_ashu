import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    Navigator,
    Dimensions,
    TouchableOpacity,
    ToolbarAndroid,
    TextInput,
    ScrollView,
    Picker
} from 'react-native';
var Orientation = require('react-native-orientation');
var {width, height} = Dimensions.get('window');
import Carousel from 'react-native-carousel';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {map} from 'lodash'

export class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // pressStatus: true,
            color_ing: 'coloring',
            select_size: '',
            selected_color: '',
            picker: [
                'Small', 'Medium', 'Large'
            ],
            colors: ['blue', 'green', 'black']
        }
        this._generateImages = this._generateImages.bind(this);
        this._generatePicker = this._generatePicker.bind(this);
        this._generateColors = this._generateColors.bind(this);
        this.onSelectColor = this.onSelectColor.bind(this);
        this.bk = this.bk.bind(this);
    }
    componentDidMount(props) {}
    _generatePicker() {
        let picker = [];
        picker = map(this.state.picker, (size) => {
            return (<Picker.Item key={size} label={size} value={size} style={{
                alignSelf: 'flex-end'
            }}/>)
        })
        return picker;
    }
    _generateImages() {
        var {width, height} = Dimensions.get('window');
        let images = [];
        images = map([
            1, 2, 3, 4
        ], (i) => {
            if (i == 1) {
                return (
                    <View key={i}>
                        <Image resizeMode="contain" style={{
                            width: width,
                            height: 300,
                            alignSelf: 'center'
                        }} source={require('../img/product1.png')}>
                            <TouchableNativeFeedback >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column-reverse'
                                }}>
                                    <Text style={styles.green_button_text}>ADD TO CART</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Image>
                    </View>
                )
            } else if (i == 2) {
                return (
                    <View key={i}>
                        <Image resizeMode="contain" style={{
                            width: width,
                            height: 300,
                            alignSelf: 'center'
                        }} source={require('../img/product2.png')}>
                            <TouchableNativeFeedback>
                                <View style={{
                                    height: 300,
                                    flexDirection: 'column-reverse'
                                }}>
                                    <Text style={styles.green_button_text}>ADD TO CART</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Image>
                    </View>
                )
            } else if (i == 3) {
                return (
                    <View key={i}>
                        <Image resizeMode="contain" style={{
                            width: width,
                            height: 300,
                            alignSelf: 'center'
                        }} source={require('../img/product3.png')}>
                            <TouchableNativeFeedback>
                                <View style={{
                                    height: 300,
                                    flexDirection: 'column-reverse'
                                }}>
                                    <Text style={styles.green_button_text}>ADD TO CART</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Image>
                    </View>
                )
            } else if (i == 4) {
                return (
                    <View key={i}>
                        <Image resizeMode="contain" style={{
                            width: width,
                            height: 300,
                            alignSelf: 'center'
                        }} source={require('../img/product4.png')}>
                            <TouchableNativeFeedback>
                                <View style={{
                                    height: 300,
                                    flexDirection: 'column-reverse'
                                }}>
                                    <Text style={styles.green_button_text}>ADD TO CART</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Image>
                    </View>
                )
            }
        })
        return images;
    }

    onSelectColor(color) {
        this.setState({selected_color: color})
    }
    _generateColors() {
        let colors = [];
        let self = this;
        colors = map(this.state.colors, (color, i) => {
            let is_selected_color = false;
            let icon;
            if (color === self.state.selected_color) {
                is_selected_color = true;
                this.state.pressStatus = false;
                icon = <Icon style={{
                    color: 'white'
                }} name="ios-checkmark" size={30}/>
            }
            return (
                <TouchableOpacity key={i} onPress={() => {
                    self.onSelectColor(color)
                }}>
                    <View style={[
                        styles.color, {
                            backgroundColor: color,
                            height: color === self.state.selected_color
                                ? 40
                                : 25,
                            width: color === self.state.selected_color
                                ? 40
                                : 25
                        },
                        is_selected_color && styles.color_active
                    ]}>
                        {icon}
                    </View>
                </TouchableOpacity>
            )
        })
        return colors;
    }
    kar() {
        console.log("dasdsadasd");
    }
    bk() {
        console.log("Dasdsadsa");
        this.props.navigator.push({name: 'home'});
    }
    render() {
        var {height, width} = Dimensions.get('window');
        let images = this._generateImages();
        let picker = this._generatePicker();
        let colors = this._generateColors();
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Icon.ToolbarAndroid navIconName="md-arrow-back" title='' style={styles.toolbar} titleColor='black' overflowIconName="md-more" actions={[{
                        title: 'fav',
                        iconName: 'md-heart-outline',
                        iconSize: 25,
                        show: 'always'
                    }
                ]}>
                    <View style={{
                        flex: 1,
                        alignSelf: 'center',
                        borderWidth: 0,
                        paddingLeft: width / 9,
                        paddingTop: 13
                    }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            Nightrise Hoodie
                        </Text>
                    </View>
                </Icon.ToolbarAndroid>
                <View style={{
                    flex: 1
                }}>
                    <ScrollView style={{
                        flex: 1
                    }}>
                        <View style={{
                            height: 350,
                            flex: 1,
                            alignItems: 'stretch'
                        }}>
                            <Carousel indicatorColor="#22c064" indicatorOffset={0} hideIndicators={false} indicatorAtBottom={true} loop={false} animate={false} width={width}>
                                {images}
                            </Carousel>
                        </View>
                        <View>
                            <View style={styles.size_color}>
                                <View style={{
                                    flex: 1
                                }}>
                                    <View style={styles.picker}>
                                        <Picker selectedValue={this.state.select_size} style={{
                                            marginLeft: 8
                                        }} onValueChange={(size) => this.setState({select_size: size})}>
                                            {picker}
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.coloring}>
                                    {colors}
                                </View>
                            </View>
                        </View>
                        <View style={{
                            height: 30,
                            backgroundColor: 'white'
                        }}></View>
                        <View style={{
                            backgroundColor: 'white'
                        }}>
                            <View style={styles.tab_heading_wrapper}>
                                <View style={[
                                    styles.tab, {
                                        borderRightWidth: 1,
                                        borderRightColor: '#f3f3f3'
                                    },
                                    styles.tab_selected
                                ]}>
                                    <TouchableOpacity onPress={this.kar}>
                                        <Text style={styles.tab_text}>Info</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.tab}>
                                    <TouchableOpacity>
                                        <Text style={styles.tab_text}>Delivery</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.tab_content_wrapper}>
                                <Text style={styles.tab_content_text}>5.5 inch FHD IPS Display</Text>
                                <Text style={styles.tab_content_text}>1920 x 1080 pixels Resolution with 2.5D Curved Screen</Text>
                                <Text style={styles.tab_content_text}>4 GB RAM and 32 GB ROM with Expandable Memory upto 128 GB</Text>
                                <Text style={styles.tab_content_text}>13 MP Primary Camera and 5 MP Secondary Camera</Text>
                                <Text style={styles.tab_content_text}>MediaTek Helio P10 – 1.8 Ghz Octa Core (MT6755) Processor</Text>
                                <Text style={styles.tab_content_text}>4000 mAh Li-Poly Battery</Text>
                                <Text style={styles.tab_content_text}>Android v5.1.1 (Lollipop) Android on Steroids (AOS) OS</Text>
                                <Text style={styles.tab_content_text}>Dual SIM (LTE+LTE) and Fingerprint Sensor</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.full_cart}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20
                                    }}>ADD TO CART</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: 'white'
                        }}>
                            <View style={styles.full}>
                                <Text style={{
                                    color: '#484643',
                                    fontSize: 18
                                }}>Also in this category</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{}}>
                                        <View style={{
                                            width: width / 2
                                        }}>
                                            <ResponsiveImage style={{
                                                marginLeft: 10
                                            }} source={require('../img/extra1.png')} initWidth="170" initHeight="300"></ResponsiveImage>
                                            <View style={{
                                                flex: 1
                                            }}>
                                                <Text style={{
                                                    fontSize: 23,
                                                    color: '#333',
                                                    textAlign: 'center'
                                                }}>Festival Hoodie Gray $55</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{
                                            width: width / 2
                                        }}>
                                            <ResponsiveImage style={{
                                                marginLeft: 10
                                            }} source={require('../img/extra3.png')} initWidth="170" initHeight="300"/>
                                            <Text style={{
                                                fontSize: 23,
                                                color: '#333',
                                                textAlign: 'center'
                                            }}>Festival Hoodie Gray $55</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 30,
                                    backgroundColor: 'white'
                                }}></View>
                                <View style={{
                                    width: width / 2
                                }}>
                                    <ResponsiveImage style={{
                                        marginLeft: 10
                                    }} source={require('../img/product1.png')} initWidth="170" initHeight="300"/>
                                    <Text style={{
                                        fontSize: 23,
                                        color: '#333',
                                        textAlign: 'center'
                                    }}>Festival Hoodie Gray $55</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={this.bk}>
                                        <View style={styles.back_cart}>
                                            <Icon name="ios-arrow-round-back" style={{
                                                color: 'white'
                                            }} size={60}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

ProductPage.propTypes = {
    navigator: React.PropTypes.any.isRequired
}

const styles = StyleSheet.create({

    toolbar: {
        height: 56
    },
    size_color: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picker: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        borderColor: 'black',
        margin: 10,
        width: 100
    },

    green_button_text: {
        backgroundColor: '#4caf50',
        borderRadius: 20,
        padding: 10,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20,
        // marginLeft:20,
        // marginright
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },

    color: {
        alignItems: 'center',
        paddingTop: 7,
        borderRadius: 50
    },
    color_active: {
        alignItems: 'center',
        paddingTop: 5,
        borderRadius: 50
    },
    coloring: {
        flex: .51,
        //  borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tab_heading_wrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: '#f3f3f3'
    },
    tab: {
        flex: 1,
        alignSelf: 'center',
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    tab_selected: {
        borderBottomWidth: 2,
        borderBottomColor: '#4b77da'
    },
    tab_text: {
        textAlign: 'center',
        fontSize: 20
    },
    tab_content_wrapper: {
        paddingLeft: 10
    },
    tab_content_text: {
        fontSize: 20,
        padding: 5
    },
    full_cart: {
        backgroundColor: '#22c064',
        height: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    full: {
        //  backgroundColor: '',
        height: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    back_cart: {
        backgroundColor: 'black',
        height: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
