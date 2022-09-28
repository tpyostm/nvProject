import { StyleSheet, Text, View, ActivityIndicator, FlatList,Image } from "react-native";
import React,{useState, useEffect} from "react";

import axios from "axios";

const ProductScreen = () => {
  
    const [product,setProduct] = useState([]);

    useEffect(()=>{

        const getData =async ()=>{
            const res = await axios.get('https://api.codingthailand.com/api/course')
            //console.log(res.data.data)
            //alert(JSON.stringify(res.data.data))
            setProduct(res.data.data);
        }
        getData();
    },[])

    const _renderItem = ({ item }) => {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
            <Image
              resizeMode="cover"
              source={{ uri: item.picture }}
              style={styles.thumbnail}
            />
            <View style={styles.dataContainer}>
              <View style={styles.dataContent}>
                  <Text style={styles.title}>
                      {item.title}
                  </Text>
                  <Text style={styles.detail}>
                      {item.detail}
                  </Text>
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    return (
    <View>
      <FlatList
        data={product}
        keyExtractor = {(item,index)=>item.id.toString}
        renderItem = {_renderItem}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});