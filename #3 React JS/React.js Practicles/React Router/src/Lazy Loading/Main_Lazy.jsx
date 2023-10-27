import React, { lazy, Suspense } from 'react'

// Without Lazy Loading Import
import First from './First'

// With Lazy Loading Import
// const Second = lazy(() => import(""));
const Second = lazy(() => import("./Second"));


function Main_Lazy() {
  return (
    <div className='container mt-5'>
      
      <h1> I'm Main Component of Lazy Loading. </h1>
      <hr />

      <First/>

      {/* <Suspense fallback={ <div className='spinner-border'> </div> }> */}
      {/* <Suspense fallback={ <div> Loading </div> }> */}
      <Suspense fallback={ <div className='spinner-border'> </div> }>
        <Second/>
      </Suspense>

    </div>
  )
}

export default Main_Lazy