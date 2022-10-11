import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

// navigation and route are passed as props from App.js defaultly
const Home = ({ navigation }) => {
    // navigation.navigate('component name') is used to navigate to that component

    const [name, setName] = useState('Ayon Jodder');
    const handleRedirect = () => {
        navigation.navigate('About', { myName: `${name}` });
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