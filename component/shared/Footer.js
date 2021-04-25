import React from 'react';
import {Text, StyleSheet, View} from "react-native";

function Footer(props) {
    return (
        <div>
            <View style={styles.container}>
                <Text color="white"><h3>Goeffrey Zed Tansporters</h3></Text>
            </View>
            
        </div>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
     
     position:"absolute",
      width:'100%',
      marginTop:"5px",
      backgroundColor:"grey",
      width:"1200PX"
      
      
    },
    Img:{
       
    }
  });