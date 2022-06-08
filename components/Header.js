import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';

const Header = () => {

  const Container = styled.View`
    alignItems: center;
    justifyContent: center;
    backgroundColor: #fff;
    height: 60px;
    borderBottomColor: #dee2e6;
    borderBottomWidth: 1px;
    shadowColor: #000'
    elevation: 1;
    zIndex: 1000;
  `;

  const Wrapper = styled.View`
    alignItems: center;
    flexDirection: row;
    backgroundColor: #fff;
    height: 40px;
    width: 250px;
    border: 1px solid #dee2e6;
    borderRadius: 12px;
    paddingHorizontal: 12px;
  `;

  const Search = styled.TextInput`
    flex: 1;
  `;


  return (
    <Container>
      <Wrapper>
        <Search placeholder="Pesquisar" />
        <TouchableOpacity>
          <Icon name="search" color="#000" size={24} />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  )
}

export default Header;