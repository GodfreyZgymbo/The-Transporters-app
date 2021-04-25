import React from 'react';
import { View,Text, TextInput, Button,StyleSheet,Image } from 'react-native';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import signup from "./SignUp";
import signin from "./SignIn";
import Home from "./Home";
import UserDashBoard from "./UserDashBoard";

function Navigation(props) {
  
    return (
      <View >
       <header>
        <Router>
               
                <Link  to="/signup" >Sign Up </Link>
                
                <Link to="/" >  || Sign In</Link>
                
              <Switch> 
               
                <Route exact path="/signup" component={signup}/>
                 <Route  path="/Home" component={Home}/>
                 <Route  path="/Userrequest" component={UserDashBoard}/>
                 <Route  path="/Userrequest1" component={UserDashBoard1}/>
                 <Route  path="/Userrequest2" component={UserDashBoard2}/>
                 <Route  path="/Userrequest3" component={UserDashBoard3}/>
                 <Route  path="/Userrequest4" component={UserDashBoard4}/>
                 <Route exact  path="/" component={signin}/>

            </Switch>
        </Router>
    </header>

      </View>
    );
  }

export default Navigation;








const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: '',
      justifyContent: '',
    },
    Img:{
        height:'100px',
        width:'100%',
        backgroundColor:"black"
    },
    imput:{
        border:" solid black",
        borderRadius:"15px",
        height:"35px"

    },
    text:{
       
        marginLeft:"35%"
     },
     space:{
       paddingLeft:"10px"
     }
  });