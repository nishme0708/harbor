import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Harbor from './components/Harbor';
import testnets from './store/reducers';

const store = createStore(testnets);

function App() {
  return (
    <>
      <Provider store={store}>
        <Harbor></Harbor>
      </Provider>
    </>
  );
}

export default App;
