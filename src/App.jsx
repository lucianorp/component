import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Counter from './components/Counter'
import GithubUser from './components/GithubUser'
import ProductQuantity from './components/ProductQuantity'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Modal from './components/Modal/Modal'
import ContactForm from './components/ContactForm/ContactForm'
import Accordion from './components/Accordion/Accordion'



function App() {
  

  return (
    <>
      <h2>Modal</h2>

      <Modal></Modal>

      <h2>Formulario</h2>

      <ContactForm></ContactForm>


      <h2>Accordion</h2>

      <Accordion></Accordion>


        <h1>Github User</h1>
        <GithubUser/>
        <h2>Contador</h2>
        <Counter/>

        <h2>Produto</h2>
        <ProductQuantity></ProductQuantity>

        <h2>Eventos</h2>

        <Events></Events>

        <MyCSSComponent></MyCSSComponent>

        <TextComponent text="Meu Primeiro Texto" descricao="Descricao do primeiro texto"/>
        <TextComponent text="Meu Segundo Texto" descricao="Descricao do segundo texto"/>
        <TextComponent text="Meu Terceiro Texto" descricao="Descricao do terceiro texto"/>
        <SecondText/>
        <ThirdText/>
        
    </>
  )
}

export default App
