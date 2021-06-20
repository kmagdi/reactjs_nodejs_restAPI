import express from 'express'
//import router from './router.js'
import cors from 'cors'
import mysql from 'mysql'
import {v4 as uuidv4} from 'uuid'
import {config} from './dbconfig.js'

const app=express()
const port=8080
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(config)

app.post('/add',(req,res)=>{
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

//run the server:
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})