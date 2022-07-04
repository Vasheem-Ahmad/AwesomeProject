import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, Button, TextInput,} from 'react-native';
import { ScrollView, StyleSheet, SafeAreaView, SectionList, StatusBar } from "react-native";
// import { TextInput } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: 'React JS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 3,
    name: 'Node JS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
];
 
const renderItem = ({item}) => {
  return (
    <View style={{ alignItems: 'center', }}>
      <Image source={{uri: item.url}} resizeMode="cover" style={{width: 200, height: 200,}} />
      <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
};

const GallerySlider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <InputValue />

      <View style={{ borderWidth: 1, borderColor: '#ccc', padding: 20, margin: 20, borderRadius: 10, alignItems: 'center', backgroundColor: '#fff', overflow: 'hidden', }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginHorizontal: 0,
            backgroundColor: '#F4BB41',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.6}
        />
      </View>
      
      <App />
    </ScrollView>
  );
};

// Sectioned Lists
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);


const InputValue = () => {
  const [enterText, setEnterText] = useState('');
 
  function getInputValue (val) {
    setEnterText(val);
  }
  
  function addInputValue () {
    console.log(enterText);
  }
  
  return(
    <View style={{ padding:20 }}>
      <TextInput placeholder='Enter your text here' 
        onChangeText={getInputValue}
        style={{borderColor:'#ccc',borderWidth:1,padding:10,marginBottom:5}}
      />
      <Button title='Add Me' onPress={addInputValue} />
      <Text>{enterText}</Text>
    </View>
  )
}

export default GallerySlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    fontSize: 14,
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8
  },
  header: {
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 14
  }
});
