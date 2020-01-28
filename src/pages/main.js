import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TextInput,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';
//import User from '../pages/user';

export default class Main extends Component {
    static navigationOptions = {
        //headerShown: false,
        //headerMode: 'none',
        title: 'Home',
      };

    constructor(props) {
        super(props);
        this.state = {
            users: {},
        };
    }

    componentDidMount () {
        this.loadUsers();
    }
    
    async loadUsers(gitLogin) {
        const response = await api.get(`/users/${gitLogin}`);
        this.setState({ users: response.data });
        //console.log(response);
    }

    render() {
        const { loadUsers, gitLogin } = this.state;
        return (
           <View style={styles.container}>
                <TextInput 
                style={styles.input1}
                placeholder='Digite o usuário'
                placeholderTextColor='#333'
                />
                <TouchableOpacity onPress={() => loadUsers(gitLogin)} style={styles.button1}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 50,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        height: 565,
    },
    input1: {
        height: 40,
        //borderWidth: 1,
        textAlign: 'center',
        width: 300,
        alignContent: 'center',
        alignItems: 'center',
        //marginLeft: 30,
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: '#696969',
        marginTop: 200,
        marginBottom: 30,
    },
    button1: {
        backgroundColor: '#1E90FF',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
      },
});
