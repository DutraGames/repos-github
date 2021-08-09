import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const [repos, setRepos] = useState([])

  

  return (
    <div>
      <Header />



      <Footer/>
    </div>
  );
}

export default App;
