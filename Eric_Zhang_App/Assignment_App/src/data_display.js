import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import { ref, set } from 'firebase/database'

const DataDisplay = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addData = () => {
        set(ref(db, 'posts/' + title) , {
            title: title,
            body: body
        })
        setTitle('')
        setBody('')
    }

    const [data, setData] = useState([])
    
    useEffect (() => {
        const dataRef = ref(db, 'posts/');
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Received Data</Text>
            <TextInput 
                placeholder='Title'
                value={title}
                onChangeText = {(text) => setTitle(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Body'
                value={body}
                onChangeText = {(text) => setBody(text)}
                style={styles.input}
            />
            <Button 
                title='Add Data'
                onPress={addData}
            />
        </View>
    )
}

export default DataDisplay

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 100,
      fontWeight: 'bold'
    },
    input: {
      borderWidth: 1,
      borderColor:'black',
      margin:10,
      padding:10,
      fontSize:18,
      borderRadius:6
    },
  });