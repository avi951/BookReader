import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
}

export default HomeLayout