import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import SearchResultPage from './components/SearchResultPage'

function App() {


  return (
    <>
      <Layout>
        <SearchResultPage />
      </Layout>
    </>
  )
}

export default App
