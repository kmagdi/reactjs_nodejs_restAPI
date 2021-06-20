import express from 'express'
import {v4 as uuidv4} from 'uuid'
import mysql from 'mysql'
import {config} from './dbconfig.js'
import cors from 'cors'

import pkg from 'express';


const router=express.Router()
const db=mysql.createConnection(config)

router.use(cors())
router.use(express.json())

router.get('/',(req,res)=>{
    console.log('Üdvözöllek a Könyvtár oldalán !')
    db.query('SELECT * from books', (error, results)=> {
        if (error) 
            console.log(error)
        else
            res.send(results)
      });
    });
       
router.post('/',(req,res)=>{
    console.log('post...')
    const title=req.body.title
    const author=req.body.author
    const year=req.body.year
    const category=req.body.category
    const id=uuidv4()

    db.query('insert into books values (?,?,?,?,?)',
        [id,author,title,year,category],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-insert failed:${err}`)
            else
                console.log('Sikeres insert!')
        }
        )
    
})
//get a record by unique id from database(array):
/*router.get('/:id',(req,res)=>{
    const {id}=req.params
    const foundBook=books.find(book=>book.id===id)
    res.send(foundBook)

})
//delete a record by id:
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    books=books.filter(book=>book.id!==id)
    res.send(`Törölve a követkő azonosítójú könyv: ${id}`)
})
//update a record:
router.patch('/:id',(req,res)=>{
    const {id}=req.params
    const {title}=req.body
    let getBook=books.find(book=>book.id===id)
    if(title)
        getBook.title=title
    res.send(`Sikeresen módosítva a ${id} azonosítójú könyv neve!`)
})
*/
export default router