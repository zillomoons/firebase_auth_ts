import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import {removeUser} from 'store/slices/userSlice'
import { useAppDispatch } from 'store/redux-hooks'

const HomePage = () => {
  const {  isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  }
  return isAuth
    ? <div>
      <h1>Welcome to HomePage</h1>
      <button onClick={handleLogout}>Log out from { email}</button>
    </div>
    : <Navigate to='/login' />
  
}

export default HomePage;