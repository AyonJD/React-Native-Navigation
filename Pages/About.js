import React from 'react';
import { Text, View, Button } from 'react-native';

const About = ({ route, navigation }) => {
    // route.params is used to get the data passed from the previous component
    const { myName } = route.params;
    return (
        <>
            <View>
                <Text>This is About page</Text>
                <Text>My name is {myName}</Text>
                <Button title='Go Back' onPress={() => navigation.goBack()} />
            </View>
        </>
    );
};

export default About;