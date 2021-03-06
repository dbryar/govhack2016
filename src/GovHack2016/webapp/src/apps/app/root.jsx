import * as React from 'react';
import {Provider} from 'react-redux';
import {App} from './containers';


const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;