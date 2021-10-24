import React from 'react';
import './App.css';
import UserDetails from './components/UserDetails';
import { Provider } from 'react-redux'
import store from './redux/store/store';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <UserDetails />
      </div>
    </Provider>
    
  );
}

export default App;
