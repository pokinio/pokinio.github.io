const express = require('express')
const app = express()
const port = 3500
const cors = require('cors')


app.listen(port,()=>{
    console.log('server listen on port '+port)
})
app.use(cors())

const conection = require('./database/db')
conection.connect((error)=>{
    if(!error){
        console.log('db is conected')
    }else{
        console.log(error)
    }
})

app.get('/',(req,res)=>{
    conection.query('SELECT * FROM participantes',(error,results)=>{
        if(!error){
            res.send(results)
        }else{
            console.log(error)
        }
    })

})

