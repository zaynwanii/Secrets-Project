import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url'

const __dirname=dirname(fileURLToPath(import.meta.url));
const port=3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{ 
     res.sendFile(__dirname+'/public/index.html');
});
app.post('/check',(req,res)=>{
    const password="ILoveProgramming";
    const input=req.body.password;
    if(password==input)
    {
        res.sendFile(__dirname+'/public/secret.html');
    }
    else{
        res.redirect('/');
    }
});

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})
