import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../logo.svg';
import { Creators } from '../store/modules/users/actions';
// import { Container } from './styles';

function Pages() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(Creators.getUsers())
  }, [])

  return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {users.data.map(item => (
          <div key={item.node_id}>
            {item.login}
          </div>
        ))}
      </div>
    );
}

export default Pages;