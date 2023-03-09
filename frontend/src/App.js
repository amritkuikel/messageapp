import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route ,Routes } from "react-router-dom"
import Home from './Pages/Home'
import Chat from './Pages/Chat'
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </ChakraProvider>
    </BrowserRouter>
  )};
    
    

export default App;
