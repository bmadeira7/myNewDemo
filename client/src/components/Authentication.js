import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Authentication = props => (
  props.token
    ? <button className="btn btn-dark float-right mt-4" onClick={() => Auth.logout()}>Logout</button>
    : <Link className="linkLogin" to='/login'>Login</Link>
);

export default Authentication;
