import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler } from 'react-native';

import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import One from './component/one';
import Two from './component/two';
import Three from './component/three';
import Menu from './component/menu';
import PostOne from './component/postsOne';
import PostTwo from './component/postsTwo';
import Cakes from './component/cakes';
import { Provider } from 'react-redux'
import store from './redux/store'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "false"
    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="menu" component={Menu} initial={true} />
            <Scene key="postOne" component={PostOne}/>
            <Scene key="postTwo" component={PostTwo}/>
            <Scene key="one" component={One} />
            <Scene key="two" component={Two} />
            <Scene key="three" component={Three} />
            <Scene key="cakes" component={Cakes} />

          </Stack>
        </Router>
      </Provider>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
