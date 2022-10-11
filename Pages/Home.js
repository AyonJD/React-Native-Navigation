import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {

    const handleRedirect = () => {
        navigation.navigate('About');
    }
    return (
        <>
            <View>
                <Text>This is Home page</Text>
                <Button title="Learn about us" onPress={handleRedirect} />
            </View>
        </>
    )
}

export default Home;