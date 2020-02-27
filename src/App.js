import React, { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import store from './store'
import SearchBar from './components/layout/SearchBar'
import AddBtn from './components/layout/AddBtn'
import Logs from './components/logs/Logs'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <Logs />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
