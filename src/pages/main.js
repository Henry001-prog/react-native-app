import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        //headerShown: false,
        //headerMode: 'none',
        title: 'Home',
      };

    constructor(props) {
        super(props);
        this.state = {
            response: []
        };
    }

    componentDidMount () {
        this.loadProducts();
    }
    
    async loadProducts() {
        const response = await api.get(`/chain/info`);
        //const { data } = response.data;
        this.setState({ response });
        console.log(response);
    }

    renderItem = ({ item }) => {
        return(
            <View>
                <Text>{item.chain}</Text>
                <Text>{item.blocks}</Text>
            </View>
        );
    }

    render() {
        //const { response } = this.state;
        return (
           <View>
               {<FlatList
                data={this.state.response}
                keyExtractor={item => item.bestblockhash}
                renderItem={this.renderItem}
               />}
           </View> 
        );
    }
}
