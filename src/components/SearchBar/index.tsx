import React from 'react';
import {SafeAreaView,View, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { styles } from './styles';

const SearchBar = () => {
  const [text, onChangeText] = React.useState('');

  return (
  <SafeAreaView style={styles.searchBox}> 
      <Ionicons name='search' color={'#FFF'} size={28}/>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Procurar um áudio"
        />
     </View>
  </SafeAreaView>);
};

export default SearchBar;