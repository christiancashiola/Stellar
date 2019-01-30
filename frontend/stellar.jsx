import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchUsers } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);
  window.dispatch = store.dispatch;
  window.fu = fetchUsers;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
