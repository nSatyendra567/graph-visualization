import React from 'react'
import GraphCanvas from './components/GraphCanvas'
import FlowChart from './components/FlowChart'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const App = () => {
  return (
    <>
    
    {/* <GraphCanvas/> */}
    <Sidebar />
    <Header />
    <FlowChart/>
    </>
  )
}

export default App