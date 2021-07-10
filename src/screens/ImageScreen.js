import React from 'react';
import ImageDetail from '../components/ImageDetail';

import { View, Text, StyleSheet } from 'react-native';


const ImageScreen = () => {
    return <View>
        <ImageDetail
            title="Beach"
            imageSource={require('../../assets/images/beach.jpg')}
            score="8"
        />
        <ImageDetail
            title="Forest"
            imageSource={require('../../assets/images/forest.jpg')}
            score="10"
        />
        <ImageDetail
            title="Mountain"
            imageSource={require('../../assets/images/mountain.jpg')}
            score="3"
        />
    </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen;