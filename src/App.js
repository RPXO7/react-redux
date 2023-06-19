import React from 'react'
import '../src/App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import AddTodo from './Component/AddTodo' 
import DisplayTodo from './Component/DisplayTodo'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
    <Container className='py-3'>
      <AddTodo/>
      <DisplayTodo/>
    </Container>
    </Provider>
    )
  }
  
  export default App
        
  
  
  
  
  
  




  
  
  
  
  

  



  

  
  
  
  
  
  
  
  
  
  // import Home from './Component/Home'
  // import Userlisting from './Component/Userlisting'
  // import Adduser from './Component/Adduser'
  // import Updateuser from './Component/Updateuser'
  // import { ToastContainer } from 'react-toastify'
  
  
  
    // <>
    //  <div className='App'>
    //   <BrowserRouter>
    //   <div className='App-header  '>
    //     <Link to='/'>Home</Link>
    //     <Link to='/user'>User</Link>
    //   </div>
    //     <Routes>
    //       <Route path='/' element ={<Home/>}/>
    //       <Route path='/user' element = {<Userlisting/>}/>
    //       <Route path='/user/add' element = {<Adduser/>}/>
    //       <Route path='/user/edit/:code' element = {<Updateuser/>}/>
    //     </Routes>
    //   </BrowserRouter>
    //   <ToastContainer></ToastContainer>
    //  </div>
    // </>