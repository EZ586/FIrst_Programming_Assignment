import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import { onValue, ref, set } from 'firebase/database'

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
    
    const removeData = () => {
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
        onValue(dataRef, (snapshot) => {
            const ref_data = snapshot.val();
            const newData = Object.keys(ref_data).map(key => ({
                id:key,
                ...ref_data[key]
            }))
            console.log('----------------------------------------')
            console.log(ref_data)
            setData(newData)
            console.log(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Data</Text>
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
            <Text style={styles.data_header}>Database Data</Text>
            <ScrollView>
               {data.map((item, index) => {
                return(
                    <View key={index} style={styles.database_data}>
                        <Text style={styles.text}>Title: {item.title}</Text>
                        <Text style={styles.text}>Body: {item.body}</Text>
                    </View>
                )
                })} 
            </ScrollView>
            
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
      marginTop: 50,
      fontWeight: 'bold'
    },
    data_header: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
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
    text: {
      fontSize:20,
      textAlign:'center',
      marginTop:10,
      marginBottom:10,
      marginLeft: '20',
      textAlign: 'left',
    },
    database_data: {
      borderWidth: 1,
      borderColor:'black',
      borderRadius:6,
      fontSize:20,
      textAlign:'center',
      marginBottom:10
    },
  });