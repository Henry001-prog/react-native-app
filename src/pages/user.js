import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import users from '../pages/main';
import axios from '../services/api';

export default class User extends Component {
    static navigationOptions = {
        title: 'Users',
      };

    constructor(props) {
        super(props);
    };

  render() {
    return (
        <View>
            <Image source={{uri: 'https://avatars1.githubusercontent.com/u/52973075?v=4",'}} style={{height: 100, width: 100, marginLeft: 100 }} />
            <Text style={{ marginLeft: 105, marginBottom: 10, marginTop: 20, color: 'white' }}>{users.login}</Text>
            <Text style={{ marginTop: 50 }}>"repos_url": {users.repos_url}</Text>
        </View>
        );
    }
} 