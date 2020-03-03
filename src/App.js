import React from 'react';
import MyRouter from './router/router';
import {Provider} from 'react-redux';
import store from './store/index';
function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <MyRouter/>
        </div>
    </Provider>
   
  );
}

export default App;
