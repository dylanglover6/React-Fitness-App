import React from 'react';
import { auth } from '../../firebase';
import { FormBtn } from './ProfileForm';

const SignOutButton = () =>
  <FormBtn
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </FormBtn>

export default SignOutButton;