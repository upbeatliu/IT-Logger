import React, { Fragment } from 'react'

export const Preloader = () => {
  return (
    <Fragment>
      <h4 className='center'>Loading...</h4>
      <div className="progress blue lighten-4">
        <div className="indeterminate blue" />
      </div>
    </Fragment>
  )
}

export default Preloader