import React from 'react';
import Notes from './Notes';

function Home(props) {

  const {showalert} = props
  return (
    <>
      <div className="container">
        {/* call notes for fetch data  */}
        <Notes showalert={showalert} />
      </div>
    </>
  )
}

export default Home
