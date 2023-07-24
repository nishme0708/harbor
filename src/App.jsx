import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Harbor from './components/Harbor';
import { ICONS } from './components/Icon';
import { COLORS } from './store/Util';
import testnets from './store/reducers';
import Loader from './components/Loader';

const store = createStore(testnets);

function App() {
  const testnet = {
    name: 'sky-combine',
    id: 'e50bd5fb-d423-4bbe-9ad3-6c01d10b5e7b',
    status: 'RUNNING',
    endpoint: '3.110.142.253',
    created_at: '2022-10-27T09:38:25.870847+00:00',
    updated_at: '2022-10-27T09:40:45.834821+00:00',
    testnet_off_chain_actors: [
      {
        name: 'routerCache',
        status: 'RUNNING',
        __typename: 'testnet_off_chain_actor',
      },
      {
        name: 'ipfs',
        status: 'RUNNING',
        __typename: 'testnet_off_chain_actor',
      },
      {
        name: 'sequencerCache',
        status: 'RUNNING',
        __typename: 'testnet_off_chain_actor',
      },
    ],
    testnet_chains: [
      {
        chain: 'ethereum',
        status: 'RUNNING',
        __typename: 'testnet_chain',
      },
    ],
    testnet_image: {
      project_id: '763db951-01d2-455e-8c45-08b839f2248b',
      id: 'e96c43d5-129c-466a-9998-c3453e524f38',
      __typename: 'testnet_image',
    },
    __typename: 'testnet',
  };
  const items = [
    {
      key: 'Running',
      props: {
        icon: ICONS.RUNNING_TICK,
        state: COLORS.SUCCESS,
        text: 'RUNNING',
        count: 3,
      },
    },
    {
      key: 'Stopped',
      props: {
        icon: ICONS.CLOCK,
        state: COLORS.PROGRESS,
        text: 'Stopped',
        count: 3,
      },
    },
    {
      key: 'Process',
      props: {
        icon: ICONS.RUNNING_TICK,
        state: COLORS.FAILED,
        text: 'process',
        count: 3,
      },
    },
  ];
  const selected = {
    key: 'Running',
    props: {
      icon: ICONS.RUNNING_TICK,
      state: COLORS.SUCCESS,
      text: 'RUNNING',
      count: 3,
    },
  };

  const handleOption = (option) => {
    console.log('selected value', option.text);
  };

  return (
    <>
      <Provider store={store}>
        <Harbor></Harbor>
      </Provider>
    </>
  );
}

export default App;
