import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        //headerShown: false,
        //headerMode: 'none',
        title: 'Home',
      };

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/chain/info`);

        //const pr = response.data;

        console.log(response);
    }

    render() {
        return (
           <View>
               <Text>Página Principal</Text>
           </View> 
        );
    }
}