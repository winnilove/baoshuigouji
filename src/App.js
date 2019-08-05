import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import './App.less'

import Container from './views/container/container'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container></Container>
      </div>
    </Provider>
  );
}

export default App;
