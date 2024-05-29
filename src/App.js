import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import { ScaleLoader } from 'react-spinners';
import { useLocation } from 'react-router';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 30)
  }, [])
  return (
    <div>
      {loading ?
        <div className="loader">
          <ScaleLoader color={'#fff'} size={90} speedMultiplier={1} />
        </div> :
        <Home />
      }
    </div>

  )
}

export default App