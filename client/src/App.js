import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {InsertNewBook} from './components/InsertNewBook'
import { Footer } from './components/Footer';
import { Books } from './components/Books';
import { Home } from './components/Home';

 
import { MyNavbar } from './components/MyNavbar';


export const App=()=>{
  return(
    <BrowserRouter>
      <div className="App">
        <Switch>
           
          <Route path="/insertnewbook">
             <MyNavbar />
             <InsertNewBook />
             <Footer />
          </Route>

           <Route path="/books">
              <MyNavbar/>
              <Books/>
              <Footer/>
           </Route>
           
           <Route path="/">
              <MyNavbar/>
              <Home/>
              <Footer/>
           </Route>
       </Switch> 
    </div>
  </BrowserRouter>


  )
}
