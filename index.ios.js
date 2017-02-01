import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import MyScene from './MyScene';

class nav02 extends Component {

//  ver 1
//  render() {
//    return (
//      <MyScene />
//    )
//  }
//  ver 2
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => 
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}

          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('nav02', () => nav02);
