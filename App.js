import React, {useState} from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { Appbar, Card, Button, Title, Paragraph } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './screens//HomeScreen';
import GetStarted from './screens/GetStarted';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import Dashboard from './screens/DashboardScreen';


// const Drawer = createDrawerNavigator();
// function Sidemenu() {
//     return (      
//         <Drawer.Navigator drawerPosition='right'>
//             <Drawer.Screen name="Home" title="Go to main" component={Home} />
//             <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
//             <Drawer.Screen name="LogInScreen" component={LogInScreen} />
//             <Drawer.Screen name="Dashboard" component={Dashboard} />
//         </Drawer.Navigator>
//     );
// }

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
                    <Card.Cover source={require('./android/app/src/images/VE_Background_Image_Calls_2.png')} />
                    <Paragraph>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            <Card style={{ marginTop: 10 }}>
                <Card.Content>
                    <Card.Cover source={require('./android/app/src/images/VE_Background_Image_Calls_2.png')} />
                    <Title>Loirem ipsum is dummy text</Title>
                    <Paragraph>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
        </>
    );
};
  

const Stack = createStackNavigator();
function App() {
    return (              
        <Stack.Navigator>
            <Stack.Screen name="Home" title="Go to main" component={Home} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            {/* <Stack.Screen name="SearchBar" component={SearchBar} /> */}
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: '' }} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
export default function Homee() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    activeTintColor: 'red',
                    inactiveTintColor: '#000',
                    //safeAreaInsets: { bottom: 50 },
                    //labelStyle: { paddingBottom: 40, fontSize: 14 }, 
                    labelStyle: { fontSize: 12 },
                    // tabStyle: { backgroundColor: '#000', height: 100 },
                    tabStyle: { backgroundColor: '#fff'}
                }} >
                <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<FontAwesome5 name={'home'} size={22} color={color}></FontAwesome5>) }} />
                <Tab.Screen name="SearchBar" component={SearchBar} options={{ tabBarLabel: 'Search', tabBarIcon: ({ color }) => (<FontAwesome5 name={'search'} size={22} color={color}></FontAwesome5>) }} />
                <Tab.Screen name="SignUpScreen" component={SignUpScreen} options={{ tabBarLabel: 'Browse', tabBarIcon: ({ color }) => (<FontAwesome5 name={'box-open'} size={22} color={color}></FontAwesome5>) }} />
                <Tab.Screen name="LogInScreen" component={LogInScreen} options={{ tabBarLabel: 'Log In', tabBarIcon: ({ color }) => (<FontAwesome5 name={'bell'} size={22} color={color}></FontAwesome5>) }} />
                <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ fucused }) => (<Image source={ require ('./android/app/src/images/Avatar2.png')} style={{ width: 25, height: 25 }}/>) }} />
            </Tab.Navigator>
            {/* <Sidemenu /> */}
        </NavigationContainer>
    );
}

