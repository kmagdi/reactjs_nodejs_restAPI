import React, { useCallback, useState } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {InsertNewBook} from './components/InsertNewBook'
import { Footer } from './components/Footer';
import { Books } from './components/Books';
import { Home } from './components/Home';
import './App.css'
 
import { MyNavbar } from './components/MyNavbar';


export const App=()=>{
  const [searchedWord,setSearchedWord]=useState('')
  const myCallbackFc=useCallback(word=>{
      setSearchedWord(word)
    },[])
    console.log('App:',searchedWord)
  return(
    <BrowserRouter>
      <div className="App">
      <MyNavbar parentCallback={myCallbackFc}/>
        <Switch>
          <Route path="/books">  
              <Books searched={searchedWord}/>
           </Route>
             
          <Route path="/insertnewbook">
             <InsertNewBook />
          </Route>
           
           <Route path="/">
             <Home/>           
           </Route>
           
       </Switch> 
       <Footer/>
    </div>
  </BrowserRouter>


  )
}
