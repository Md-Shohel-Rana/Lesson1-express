const express = require ('express');
const app = express();
const PORT = 3001;

app.post('/user', (req,res)=>{
   


});


app.listen(PORT,()=>{
    console.log(`server run successfully at http://localhost:${PORT}`);
});