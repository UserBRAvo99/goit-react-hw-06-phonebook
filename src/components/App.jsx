import { Provider } from 'react-redux';
import Phonebook from './Phonebook';

import { store } from 'redux/store';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </div>
  );
};
