const express = require('express');

const server = express();
server.get('/', (req, res)=> {
    res.json({message: "hello world"})
    // res.send('Hello Universe.');
})

server.listen(8080, () => {
    console.log('the server is running at PORT 8080');
})
function someFun (){
    //code here
    return someValue;
    // everything else here is ignored.
}
