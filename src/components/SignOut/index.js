import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <a className="navbar-brand" href="#"><span class="glyphicon glyphicon-eject" aria-hidden="true" onClick={auth.doSignOut}></span></a>

export default SignOutButton;
