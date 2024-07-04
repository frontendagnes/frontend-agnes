import React from 'react'
import "./Thanks.css"

//components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ButtonBack from '../../Global/ButtonBack/ButtonBack'
function Thanks() {
  return (
    <div className='thanks'>
      <Header />
      <ButtonBack />
      <div className='thanks__container'>
        Dziękuję za przesłanie zapytania.
        Postaram się odpowiedzieć jak najszybciej.
      </div>
      <Footer />
    </div>
  )
}

export default Thanks