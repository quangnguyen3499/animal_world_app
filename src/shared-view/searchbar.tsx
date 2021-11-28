import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchBarCustom = ({placeholder, valueSearch}: any) => {
  return (
    <SearchBar
      placeholder={placeholder}
      value={valueSearch}
    />
  );
}

const styles = StyleSheet.create({
})

export {SearchBarCustom};
