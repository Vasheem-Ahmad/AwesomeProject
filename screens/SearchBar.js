import React, {useState} from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { Appbar, Card, Button, Title, Paragraph } from 'react-native-paper';


const SearchBar = ({navigation}) => {
    const [name, setName] = useState('Vasheem Ahmad');
    const [person, setPerson] = useState({ name:"Faeem Ahmad", age: "30" });

    const changeName = () => {
        setName('Anis Shaikh');
        setPerson({ name:"Sirat Shaikh", age: "01" });
    }

    return (
        <>
        <Appbar.Header style={{backgroundColor:'#008060', paddingHorizontal: 0}}>
            <Appbar.BackAction onPress = {() => navigation.navigate('Home')} />
            <Appbar.Content title="Search Items" subtitle="Search which you want" />
            <Appbar.Action icon="magnify" onPress={() => Alert.alert('Left button pressed')} />
            <Appbar.Action icon="dots-vertical" onPress={() => Alert.alert('Left button pressed')} />
        </Appbar.Header>

        <ScrollView style={{ paddingHorizontal: 10, marginBottom: 25 }}>
            <View style={{ marginBottom: 0 }}>
                <Text style={{ marginTop: 15, fontSize: 20, fontWeight: '600' }}>Hello Mr. {name}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12, }}>Hello Mr. {person.name} and my age is {person.age}.</Text>
                <Button mode="contained" onPress = {changeName} style={{ marginBottom: 20, }} >Update State</Button>
            </View>

            <Card style={{ marginTop: 0 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle in brief summary" />
                <Card.Content>
                    <Card.Cover source={require('../assets/images/VE_Background_Image_Calls_2.png')} />
                    <Paragraph>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            <Card style={{ marginTop: 10 }}>
                <Card.Content>
                    <Card.Cover source={require('../assets/images/VE_Background_Image_Calls_2.png')} /> 
                    <Title>Loirem ipsum is dummy text</Title>
                    <Paragraph>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
        </>
    );
};
  

export default SearchBar;



