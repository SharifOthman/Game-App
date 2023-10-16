import React from 'react'
// import Header from './components/Header/Header'
// import Container from './components/Container/Container'
// import Footer from './components/Footer/Footer'
import './App.css'
import {Container} from './components/index'
import {Header,Hero,MostPopular,GamingLibrary,Footer} from './sections/index'

  const App=()=> {
  return (
    <>

    <Header/>
   <Container>
      <Hero/>
      <MostPopular/>
      <GamingLibrary/>
   </Container>
   <Footer/>


    </>
  )
}

export default App;