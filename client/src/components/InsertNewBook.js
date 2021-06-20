import React, { useState } from 'react';
import { Form,Button,Col } from 'react-bootstrap';
import Axios from 'axios'

export const InsertNewBook=()=>{
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [year,setYear]=useState(0)
    const [category,setCategory]=useState('')
//we want to create a request when de user click on button:
    const insertBook=()=>{
        console.log(title,author,year,category)
        Axios.post('http://localhost:8080/add', //this is the endpoint(ahová küldeni szeretnénk a kérést)
            {title:title,
            author:author,
            year:year,
            category:category}    
        ).then(()=>{
            console.log('Success!')
        }).catch(function(error) {
            console.log(error,'hiba');
          })
    }

    return(
        <div className='container newBook'>
            <h3 className='text-center'>Új könyv bevezetése a nyílvántartásba</h3>
        <Form>
            <Form.Group >
                <Form.Label>A könyv címe:</Form.Label>
                <Form.Control type="text" placeholder="add meg a könyv címét" onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Row>
                <Col>
                    <Form.Label>Kategória:</Form.Label>
                    <Form.Control as="select" onChange={(e)=>setCategory(e.target.value)}>
                        <option value='fizika'>fizika</option>
                        <option>földrajz</option>
                        <option>informatika</option>
                        <option>irodalomtörténet</option>
                        <option>képzőművészet</option>
                        <option>szépirodalom</option>
                        <option>szórakoztató irodalom</option>
                        <option>útikönyv</option>
                        <option>zene</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Kiadás éve:</Form.Label>
                    <Form.Control type="number" placeholder="add meg a kiadási évet" onChange={(e)=>setYear(e.target.value)}/>
                </Col>
            </Form.Row>

            <Form.Group >
                <Form.Label>Szerző:</Form.Label>
                <Form.Control type="text" placeholder="add meg a szerző/szerzők nevét" onChange={(e)=>setAuthor(e.target.value)}/>
            </Form.Group>

        
            
            <Form.Group >
               <Button className="btn-add" onClick={insertBook}>Hozzáad</Button>
            </Form.Group>
        </Form>
</div>
    )
}