import React, { useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { useRouter } from 'next/router';
import { Storage } from '@capacitor/storage';

export default function Header() {
  const {setLoggedIn} = useContext(AuthContext)
  const router = useRouter()

  const logout = async () => {
    await Storage.remove({key: 'accessToken'})
    setLoggedIn(false)
    router.replace('/login')
  }

  return (
    <React.Fragment>
      <p className="underline selection:bg-slate-500 selection:text-red-200" onClick={logout}>logout</p>
    </React.Fragment>
  );
};
