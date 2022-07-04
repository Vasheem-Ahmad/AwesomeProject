import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Text,
  Alert,
  ImageBackground,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Speedometer from 'react-native-speedometer-chart';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-wagmi-charts';

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625945400000,
    value: 33345.25,
  },
  {
    timestamp: 1625946300000,
    value: 33565.25,
  },
  {
    timestamp: 1625947200000,
    value: 33870.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ScrollView
      style={styles.ScrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ScrollView horizontal={true} style={styles.newsfeed}>
        <View style={[styles.avatarbox, styles.active]}>
          <Animatable.Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar1.png')}
          />
          <Text style={styles.updateavatar}>+</Text>
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar1.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar1.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>

        <View style={styles.avatarbox}>
          <Image
            animation="zoomIn"
            style={styles.avatar}
            source={require('../assets/images/Avatar2.png')}
          />
        </View>
      </ScrollView>

      <View style={{borderColor: '#ccc', borderWidth: 1, borderRadius: 10, }}>
        <LineChart.Provider data={data}>
          <LineChart height={300}>
            <LineChart.Path color="red">
              <LineChart.Gradient color="green" opacity={18}/>
              <LineChart.Dot color="blue" at={2} size={5} hasPulse />
              <LineChart.Highlight color="blue" from={2} to={3} />
              <LineChart.HorizontalLine at={{index: 0}} />
            </LineChart.Path>
            <LineChart.CursorLine color="red" />
            <LineChart.CursorCrosshair color="red" size={10} >
              <LineChart.Tooltip
                color="#fff"
                textStyle={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '600',
                  paddingHorizontal: 10,
                  paddingVertical: 0,
                }}
                style={{
                  backgroundColor: 'red',
                  borderRadius: 3,
                  padding: 0,
                }}
              />
              <LineChart.Tooltip position="middle" style={{color: 'red'}}>
                <LineChart.DatetimeText
                  style={{color: '#000', fontSize: 10, fontWeight: '600'}}
                />
              </LineChart.Tooltip>
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <Animatable.View animation="fadeInLeft">
          <Speedometer
            value={100}
            totalValue={150}
            size={250}
            outerColor="#ccc"
            internalColor="green"
            innerColor="lightblue"
            showIndicator
            indicatorColor="#808080"
            // showText
            // text="50.00"
            textStyle={{color: 'green'}}
            showLabels
            labelStyle={{color: 'blue'}}
            labelFormatter={number => `${number}%`}
            // showPercent
            percentStyle={{color: 'red'}}
            percentSize={0.7}
          />
        </Animatable.View>
      </View>

      <View style={styles.iwtcontainer}>
        <ImageBackground
          source={require('../assets/images/Main-Banner.jpeg')}
          resizeMode="cover"
          style={styles.bgimage}>
          <Text style={styles.overlaytext}>Overlay Text</Text>
        </ImageBackground>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>
          All interaction for the component are disabled. Loirem Ipsum is dummy
          text also. Interaction for the component are disabled. Loirem Ipsum is
          dummy text also.
        </Text>
        <Button
          title="Get Started"
          color="lightblue"
          onPress={() => navigation.navigate('GetStarted')}
        />
      </View>

      <ImageBackground style={styles.bgimg}
        source={require('../assets/images/VE_Background_Image_Calls_2.png')}>
			</ImageBackground>

      <View style={styles.card}>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>

      <View style={styles.imgcover}>
        <ImageBackground
          style={styles.bgimg}
          source={require('../assets/images/VE_Background_Image_Calls_2.png')}>
        </ImageBackground>
        <View style={styles.card}>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>

      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <Animatable.View
        animation="rotate"
        iterationCount="infinite"
        duration={1000}
        style={{
          height: 50,
          width: 50,
          borderStyle: 'solid',
          borderWidth: 13,
          borderRadius: 55,
          // position: 'absolute', top: 130, zIndex: -9,
          borderTopColor: 'blue',
          borderRightColor: 'green',
          borderBottomColor: 'red',
          borderLeftColor: 'pink',
          overflow: 'hidden',
        }}>
			</Animatable.View>

      <ActivityIndicator
        size="large"
        color="red"
        animating={true}>
			</ActivityIndicator>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  ScrollView: {
    paddingLeft: 7.5,
    paddingRight: 7.5,
  },
  newsfeed: {
    flexDirection: 'row',
    paddingVertical: 10,
    overflow: 'scroll',
  },
  avatarbox: {
    height: 52,
    width: 52,
    minWidth: 52,
    maxWidth: 52,
    borderColor: '#008060',
    borderWidth: 1.5,
    borderRadius: 80,
    marginRight: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: 'rgba(52, 52, 52, 0)',
    borderWidth: 1,
  },
  active: {
    borderColor: 'red',
    borderStyle: 'dotted',
  },
  updateavatar: {
    backgroundColor: '#008060',
    color: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 50,
    fontSize: 12,
    position: 'absolute',
    bottom: 0,
    right: 2,
    textAlign: 'center',
  },
  iwtcontainer: {
    flex: 1,
    marginBottom: 7.5,
  },
  bgimg: {
    flex: 1,
    minHeight: 200,
    position: 'relative',
  },
  overlaytext: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '900',
    paddingVertical: 80,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: '#ccc',
    padding: 20,
    marginBottom: 7,
    borderRadius: 3,
  },
  imgcover: {
    marginBottom: 7.5,
  },
  img: {
    minHeight: 150,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  bgimg: {
    minHeight: 150,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: 'Rajdhani-Medium',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginBottom: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
